import { PageHeader } from "../components/common/PageHeader";
import { SectionProject } from "../components/projects/SectionProject";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("projects.header.title")}
        description={t("projects.header.description")}
      />

      <SectionProject />
    </>
  );
}


