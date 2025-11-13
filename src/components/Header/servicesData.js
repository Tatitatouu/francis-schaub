// Liste des sous-sections de prestations pour Sanitaire
export const sanitairePrestationsItems = [
  { id: 'chauffage', label: 'CHAUFFAGE', href: '/sanitaire/chauffage' },
  { id: 'renouvelables', label: 'ÉNERGIES RENOUVELABLES', href: '/sanitaire/energies-renouvelables' },
  { id: 'sanitaires', label: 'SANITAIRES', href: '/sanitaire/plomberie' },
  { id: 'salle-bains', label: 'SALLE DE BAINS', href: '/sanitaire/salle-de-bains' },
];

// Liste des sous-sections de prestations pour Carrelage
export const carrelagePrestationsItems = [
  { id: 'interieur', label: 'INTÉRIEUR', href: '/carrelage#interieur' },
  { id: 'exterieur', label: 'EXTÉRIEUR', href: '/carrelage#exterieur' },
  { id: 'faience', label: 'FAÏENCE & MOSAÏQUE', href: '/carrelage#faience' },
  { id: 'sur-mesure', label: 'SUR MESURE', href: '/carrelage#sur-mesure' },
];

// Compatibilité avec l'ancien code (par défaut = sanitaire)
export const prestationsItems = sanitairePrestationsItems;

