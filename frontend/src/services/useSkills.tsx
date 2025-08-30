import { useEffect, useState } from "react";

interface LanguageData {
  lang: string;
  percent: number;
}

export function useSkills(username: string) {
  const [data, setData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/skills/${username}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json); // asumimos que el API devuelve el array [{ lang, percent }]
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, [username]);

  return { data, loading };
}
