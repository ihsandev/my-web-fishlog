export interface IHeros {
  title?: string;
  src?: string;
}

export interface IAboutSummary {
  id: number;
  image: string;
  title: string;
}

export interface IFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ISummary {
  title: string;
  about: IAboutSummary[];
  feature: IFeature[];
  mainFeature: {
    title: string;
    description: string;
  }
}

export interface IImpact {
  title: string;
  description: string;
}

export interface ICompanion {
  src: string;
}
export interface IHomeData {
  heros: IHeros[];
  summary: ISummary;
  impact: IImpact[];
  companion: ICompanion[];
}