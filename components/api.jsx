"use client"; // Mark the file as a Server Component and enable Server Actions

export default async function ServerDataFetcher() {
  const api_url = "https://musicapi01-production.up.railway.app/api/users";
  const response = await fetch(api_url, { cache: "no-store" });
  const data = await response.json();
  const person_list = data;

  let content = [];
  for (const item of person_list) {
    // console.log(`Name: ${item.name}, Age: ${item.age}`);
    content.push(
      <li key={item.id}>
        Id: {item.id}, Name: {item.nombre_user}
      </li>
    );
  }
  return <>{content}</>;
}
