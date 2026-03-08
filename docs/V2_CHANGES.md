# Centum V2 Changes

## Added capabilities
- School 2.0 Governance & Support Center with retrieval-first policy Q&A and source quote citations.
- Transformation Copilot page with readiness summary, blockers, recommended actions, and 30/60/90 plan.
- Outcomes/ROI layer page with practical transformation scorecard metrics.
- Transformation Packs concept with four curriculum-agnostic packs.
- Tool Catalog 2.0 messaging with internal-only vs school-visible controls.
- Partner/license operations page for seats, renewal, and implementation notes.
- Parent growth assets page for school communication templates.
- Extended Prisma data model for governance docs/chunks/queries, recommendations, packs, licenses, training, and scorecard snapshots.
- Seed script with onboarding/pilot/scale schools and investor-demo records.

## Route map
- `/`
- `/schools/[schoolId]/governance`
- `/schools/[schoolId]/transformation`
- `/schools/[schoolId]/roi`
- `/packs`
- `/packs/[slug]`
- `/tools`
- `/training`
- `/licenses`
- `/growth-assets`

## New models
- `School` (extended school profile + readiness)
- `GovernanceDocument`, `GovernanceDocumentVersion`, `GovernanceDocumentChunk`
- `GovernanceQuery`, `GovernanceQuerySource`
- `ToolCatalog`, `SchoolToolRecommendation`
- `TransformationPack`, `SchoolPackAssignment`
- `SchoolLicense`
- `TrainingModule`, `TrainingAssignment`
- `ScorecardSnapshot`

## Demo flow
1. Open HQ Command Center and choose pilot school.
2. Open Governance Center and ask SOP/policy question.
3. Review Transformation Copilot recommendations and 30/60/90 plan.
4. Open ROI Layer to show measurable transition outcomes.
5. Open Packs and Tool Catalog to show structured, curated rollout.
6. Show Training Hub, Partner Ops, and Parent Growth assets to demonstrate scalable service delivery.

## Optional env vars
- `LLM_PROVIDER`
- `LLM_API_KEY`
(When not present, governance assistant remains in retrieval-only demo-safe mode.)
