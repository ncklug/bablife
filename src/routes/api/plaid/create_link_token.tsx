import { APIEvent, json } from "solid-start/api"

export async function GET({ params }: APIEvent) {
  console.log(`House: ${params.house}, Year: ${params.year}`)
  const students = await hogwarts.getStudents(params.house, params.year)
  return json({ students })
}
