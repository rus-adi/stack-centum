import { PrismaClient, Role, SchoolStage, ToolCostTier, ToolVisibility } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const [onboarding, pilot, scale] = await Promise.all([
    prisma.school.create({ data: { name: "Greenfield Academy", stage: SchoolStage.ONBOARDING, readinessScore: 34, schoolType: "K-12 Private", gradeBands: "K-12", studentCount: 640, staffCount: 72, connectivityQuality: "Moderate", deviceRatio: "1:2", aiAdoptionGoal: "Safe staff AI launch" } }),
    prisma.school.create({ data: { name: "Harbor International School", stage: SchoolStage.PILOT, readinessScore: 57, schoolType: "International", gradeBands: "6-12", studentCount: 920, staffCount: 110, connectivityQuality: "Strong", deviceRatio: "1:1", individualizedGoal: "Differentiated pathways by term 2" } }),
    prisma.school.create({ data: { name: "Summit Future School", stage: SchoolStage.SCALE, readinessScore: 79, schoolType: "K-12 Group Campus", gradeBands: "K-12", studentCount: 1850, staffCount: 220, connectivityQuality: "Strong", deviceRatio: "1:1", projectsGoal: "Project-based model across middle school", selGoal: "Tiered SEL playbook" } })
  ]);

  const packs = await Promise.all([
    prisma.transformationPack.create({ data: { slug: "ai-enablement-pack", title: "AI Enablement Pack", overview: "Safe staged AI adoption with policy-first enablement.", readinessChecklist: "Policy sign-off, device readiness, training completion", trainingSuggestions: "AI classroom basics, prompt hygiene, incident handling", milestones: "Pilot staff cohort, 30-day usage review, expansion", templates: "AI parent FAQ, staff rollout memo", recommendedToolCategories: "assistants, content support", optionalBundles: "AI Starter Bundle", proofPoints: "usage logs, classroom walkthroughs", nextLeadershipActions: "Approve AI policy and nominate owner" } }),
    prisma.transformationPack.create({ data: { slug: "individualized-learning-pack", title: "Individualized Learning Pack", overview: "Practical pathways for differentiated instruction.", readinessChecklist: "Assessment baseline, planning cadence, intervention workflow", trainingSuggestions: "Data-informed grouping, adaptive routines", milestones: "Baseline, pilot cohorts, scale", templates: "grouping templates, progress conference agenda", recommendedToolCategories: "diagnostics, feedback", optionalBundles: "Learner Pathways Bundle", proofPoints: "student support artifacts", nextLeadershipActions: "Select pilot grades and define success metrics" } }),
    prisma.transformationPack.create({ data: { slug: "projects-pack", title: "Projects Pack", overview: "Structured project-based learning enablement.", readinessChecklist: "Rubrics, calendar blocks, exhibition rhythm", trainingSuggestions: "PBL planning, assessment in projects", milestones: "Prototype project, showcase, cross-grade scale", templates: "project brief template, exhibition rubric", recommendedToolCategories: "collaboration, portfolio", optionalBundles: "Projects Studio Bundle", proofPoints: "project portfolios", nextLeadershipActions: "Approve project calendar and coaching owners" } }),
    prisma.transformationPack.create({ data: { slug: "social-emotional-learning-pack", title: "Social-Emotional Learning Pack", overview: "SEL routines with practical school implementation.", readinessChecklist: "SEL cadence, referral SOP, family communication", trainingSuggestions: "Advisory routines, escalation protocols", milestones: "Homeroom launch, referral review, parent touchpoints", templates: "advisory agenda, referral form", recommendedToolCategories: "wellbeing, communication", optionalBundles: "SEL Core Bundle", proofPoints: "advisory logs, referral closure", nextLeadershipActions: "Set SEL targets and review cycle" } })
  ]);

  const nicheTool = await prisma.toolCatalog.create({
    data: {
      key: "two-hour-learning",
      name: "2 Hour Learning",
      description: "High-intensity adaptive model for specialized contexts.",
      category: "Adaptive Learning",
      useCase: "Niche acceleration pilots",
      maturityLevel: "Emerging",
      riskLevel: "Medium",
      costTier: ToolCostTier.ENTERPRISE,
      regionFit: "Selective",
      deviceRequirement: "1:1",
      connectivityNeed: "High",
      gradeSuitability: "6-12",
      recommendedRoles: "CONSULTANT,PRINCIPAL",
      visibility: ToolVisibility.CONSULTANT_ONLY,
      trainingRequired: true,
      recommendedInPacks: "individualized-learning-pack"
    }
  });

  const visibleTool = await prisma.toolCatalog.create({
    data: {
      key: "classroom-assistant-lite",
      name: "Classroom Assistant Lite",
      description: "Teacher planning and feedback helper.",
      category: "AI Assistant",
      useCase: "Lesson prep",
      maturityLevel: "Mature",
      riskLevel: "Low",
      costTier: ToolCostTier.MID,
      regionFit: "Global",
      deviceRequirement: "Shared devices",
      connectivityNeed: "Moderate",
      gradeSuitability: "K-12",
      recommendedRoles: "TEACHER,IT_ADMIN",
      visibility: ToolVisibility.SCHOOL_VISIBLE,
      trainingRequired: true,
      recommendedInPacks: "ai-enablement-pack"
    }
  });

  await prisma.schoolToolRecommendation.create({
    data: {
      schoolId: pilot.id,
      toolId: visibleTool.id,
      status: "RECOMMENDED",
      rationale: "Matches pilot goals and cost preference"
    }
  });

  await prisma.schoolToolRecommendation.create({
    data: {
      schoolId: scale.id,
      toolId: nicheTool.id,
      status: "DEFERRED",
      rationale: "High cost and advanced readiness required"
    }
  });

  await prisma.schoolPackAssignment.createMany({
    data: packs.map((pack, idx) => ({ schoolId: idx % 2 === 0 ? pilot.id : scale.id, packId: pack.id, status: "ACTIVE" }))
  });

  await prisma.trainingModule.create({
    data: {
      title: "School 2.0 Governance Essentials",
      videoUrl: "https://example.com/videos/governance",
      transcript: "Recorded training transcript...",
      checklist: "Watch video\nReview policy SOP\nPass quiz",
      quizPrompt: "Who approves AI access changes?",
      roleRequired: Role.PRINCIPAL,
      relatedPackSlug: "ai-enablement-pack",
      requiredForToolKey: "classroom-assistant-lite"
    }
  });

  await prisma.governanceDocument.create({
    data: {
      schoolId: pilot.id,
      title: "Behavior & Incident Escalation SOP",
      category: "INCIDENT_ESCALATION_SOP",
      fileUrl: "/demo/behavior-sop.pdf",
      contentText: "If a student causes physical harm, separate students immediately, notify the duty leader, document incident in 30 minutes, and contact parents before end of day. Suspension decisions require principal review.",
      chunks: {
        create: [
          { idx: 0, contentText: "Separate students immediately and notify duty leader." },
          { idx: 1, contentText: "Document incident within 30 minutes and contact parents before end of day." },
          { idx: 2, contentText: "Suspension decisions require principal review." }
        ]
      }
    }
  });

  await prisma.scorecardSnapshot.create({
    data: {
      schoolId: pilot.id,
      readinessScore: 57,
      gatesCompleted: 9,
      gatesBlocked: 3,
      trainingCompletionRate: 0.68,
      approvedToolsEnabled: 4,
      recommendationToActivationDays: 12,
      openBlockers: 5,
      unresolvedTickets: 4,
      bundleAdoption: 0.61,
      packAdoption: 0.74,
      governanceCoverage: 0.83,
      policyAttestationCompletion: 0.71
    }
  });

  console.log("Seeded Centum V2 demo data");
}

main().finally(async () => prisma.$disconnect());
