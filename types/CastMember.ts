export type CastMember = {
    id: number;
    name: string;
    known_for_department: Department;
    character?: string;
    profile_path: string;
    popularity: number;
}

type Department = "Acting" |
    "Writing" |
    "Directing" |
    "Costume & Make-Up" |
    "Sound" |
    "Production" |
    "Camera" |
    "Crew" |
    "Art" |
    "Editing" |
    "Visual Effects" |
    "Lighting"