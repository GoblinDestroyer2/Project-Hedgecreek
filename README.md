# ProjectHedgecreek

## 🚀 Snel Starten (Voor Klant/Gebruiker)

**Heb je last van beveiligingsmeldingen in PowerShell?**
Gebruik dan het meegeleverde start-script:

1. **Dubbelklik op `start.bat`** in deze map.
2. Dit venster installeert automatisch de benodigdheden (indien nodig) en start de applicatie.
3. Open je browser op `http://localhost:3000`.

*Je hoeft geen commando's te typen.*

## Development

Internal dashboard project built with [Next.js](https://nextjs.org) (`app` router). Below zijn de basisstappen om lokaal te ontwikkelen en samen te werken.

## Getting Started

Installeer dependencies en start de dev-server:

```bash
npm install
npm run dev
```

Surf naar [http://localhost:3000](http://localhost:3000) om de app te bekijken. Pas `app/page.tsx` (of andere componenten in `app/`) aan; de pagina ververst automatisch.

### Environment

- Maak een `.env.local` met o.a. `NOTION_API_KEY` en `NOTION_DATABASE_ID`.
- Deel secrets nooit in Git; gebruik `.env.example` om verplichte variabelen te documenteren.
- De app verwacht de volgende Notion database variabelen (vervang door je eigen IDs):
  - `NOTION_DATABASE_DASHBOARD_STATS`
  - `NOTION_DATABASE_DASHBOARD_GROWTH`
  - `NOTION_DATABASE_PROJECT_PERFORMANCE`
  - `NOTION_DATABASE_PROJECTS`
  - `NOTION_DATABASE_CLIENTS`
  - `NOTION_DATABASE_CUSTOMERS`
  - `NOTION_DATABASE_TASKS`
  - `NOTION_DATABASE_ORGANISATIONS`
  - `NOTION_DATABASE_CONTACTS`
  - `NOTION_DATABASE_COUNTRIES`
  - `NOTION_DATABASE_ECONOMIC_INDICATORS`
  - `NOTION_DATABASE_FINANCIAL_REVENUE`
  - `NOTION_DATABASE_FINANCIAL_METRICS`
  - `NOTION_DATABASE_MANAGEMENT_INSIGHTS`
  - `NOTION_DATABASE_PROJECT_DETAILS`
  - `NOTION_DATABASE_PROJECT_MILESTONES`

### Useful Scripts

- `npm run lint` – checkt linting issues.
- `npm run build` – productie build (Vercel/Next).

## Deployment

De app draait het makkelijkst op Vercel. Volg hun Next.js deploy docs voor CI/CD. Mocht je elders deployen, zorg voor Node 18+ en dezelfde env vars als lokaal.
