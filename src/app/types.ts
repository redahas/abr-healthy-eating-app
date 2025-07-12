type FisheryImage = {
    src: string;
    alt: string;
    title: string;
}

export type AverageMacros = {
    fat: string;
    calories: number;
}

export type Fishery = {
    FisheryManagement: string;
    Habitat: string | null;
    HabitatImpacts: string;
    ImageGallery: FisheryImage[];
    Location: string;
    Management: string | null;
    NOAAFisheriesRegion: string;
    Population: string;
    PopulationStatus: string;
    ScientificName: string;
    SpeciesAliases: string;
    SpeciesIllustrationPhoto: FisheryImage;
    SpeciesName: string;
    AnimalHealth: string | null;
    Availability: string;
    Biology: string;
    Bycatch: string;
    Calories: string;
    Carbohydrate: string;
    Cholesterol: string;
    Color: string;
    DiseaseTreatmentandPrevention: string | null;
    DiseasesinSalmon: string | null;
    DisplayedSeafoodProfileIllustration: FisheryImage | null;
    EcosystemServices: string | null;
    EnvironmentalConsiderations: string | null;
    EnvironmentalEffects: string | null;
    FarmingMethods: string | null;
    FarmingMethods_: string | null;
    FatTotal: string;
    Feeds: string | null;
    Feeds_: string | null;
    FiberTotalDietary: string;
    FishingRate: string;
    Harvest: string;
    HarvestType: string;
    HealthBenefits: string;
    Human_Health_: string | null;
    HumanHealth: string | null;
    PhysicalDescription: string;
    Production: string | null;
    Protein: string;
    Quote: string;
    QuoteBackgroundColor: string;
    Research: string | null;
    SaturatedFattyAcidsTotal: string;
    Selenium: string;
    ServingWeight: string;
    Servings: string;
    Sodium: string;
    Source: string;
    SugarsTotal: string;
    Taste: string;
    Texture: string;
    Path: string;
    last_update: string;
}

export interface FisheryRegion {
    regionSlug: string;
    regionName: string;
    fisheries: Fishery[];
    averageMacros: AverageMacros;
}
