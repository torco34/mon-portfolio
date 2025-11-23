import { PageHeader } from "../components/common/PageHeader";
import { useLanguage } from "../context/LanguageContext";

export default function SkillsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        title={t("skills.header.title")}
        description={t("skills.header.description")}
      />

      {/* <SkillsSection username="torco34" /> */}
    </>
  );
}
