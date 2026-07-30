import AulaFilters from "@/user/components/AulaFilters";
import useAulaSocket from '@/hooks/useAulaSocket';
import AulaModal from "@/user/components/AulaModal";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useSelectedAulaStore } from "@/store/selectedAulaStore";
import AulaGrid from "@/user/components/AulaGrid";

const STATE_MAP: Record<string, string> = {
  "Disponible": "available",
  "Ocupado": "busy",
  "Mantenimiento": "maintenance"
};

const ListPage = () => {
  const { aulas = [] } = useAulaSocket();
  const { selectedAula, clearSelectedAula } = useSelectedAulaStore();

  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredAulas = useMemo(() => {
    return aulas.filter((aula) => {
      if (search && !aula.name.toLowerCase().includes(search.toLowerCase())) return false;

      if (selectedState && selectedState !== 'Todos' && selectedState !== aula.estado.name && STATE_MAP[selectedState] !== aula.estado.name) return false;

      if (selectedTeacher && selectedTeacher !== "Todos" && !aula.clase?.some(c => c.user.name === selectedTeacher)) return false;

      if (selectedCourse && selectedCourse !== "Todos" && !aula.clase?.some(c => c.curso.name === selectedCourse)) return false;

      return true;
    });
  }, [aulas, search, selectedState, selectedTeacher, selectedCourse]);


  const currentAula = useMemo(() => {
    if (!selectedAula) return null;
    return aulas.find(aula => aula.name === selectedAula.name);
  }, [aulas, selectedAula]);

  return (
    <div className="h-full p-10 grid grid-cols-1 grid-rows-[auto_1fr] gap-6">
      <div>
        <AulaFilters
          icon={Search} placeholder="Buscar aula..." aulas={aulas}
          search={search} setSearch={setSearch}
          selectedState={selectedState} setSelectedState={setSelectedState}
          selectedTeacher={selectedTeacher} setSelectedTeacher={setSelectedTeacher}
          selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}
        />
      </div>

      <div className="min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4">
        <AulaGrid aulas={filteredAulas} />
      </div>

      {currentAula && (
        <AulaModal
          name={currentAula.name}
          description={currentAula.description}
          capacity={currentAula.capacity}
          estado={currentAula.estado.name}
          clase={currentAula.clase}
          onClose={clearSelectedAula}
        />
      )}
    </div>
  );
};

export default ListPage;