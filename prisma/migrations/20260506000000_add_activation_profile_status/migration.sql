CREATE TYPE "ProfileStatus" AS ENUM ('INCOMPLETE', 'ACTIVE');

ALTER TABLE "profiles"
ADD COLUMN "profileCompletionPercentage" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "profileStatus" "ProfileStatus" NOT NULL DEFAULT 'INCOMPLETE';

UPDATE "profiles"
SET "profileCompletionPercentage" = "profileCompleteness",
    "profileStatus" = CASE
      WHEN "isPublished" = true THEN 'ACTIVE'::"ProfileStatus"
      ELSE 'INCOMPLETE'::"ProfileStatus"
    END;

CREATE INDEX "profiles_profileStatus_idx" ON "profiles"("profileStatus");
