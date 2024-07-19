"use server";
{
  /* Server Action */
}
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    email: formData.get("email"),
    name: formData.get("name"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  console.log(meal);
}
