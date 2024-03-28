import { readFileSync, writeFileSync } from "fs";
import { License, LicenseResType, SolVersionResType } from "../types";
import { SOLIDITY_VERSION_URL, SPDX_LICENSE_URL } from "./constants";

const getLicenseIds = async () => {
  const res: LicenseResType = JSON.parse(
    await (await fetch(SPDX_LICENSE_URL)).text(),
  );

  return res.licenses.reduce(
    (acc, license) => ({
      ...acc,
      [license.licenseId]: license.name,
    }),
    {} as Record<License["licenseId"], License["name"]>,
  );
};

export const genLicenseIds = async () => {
  try {
    const licenseIds = await getLicenseIds();

    let gen = readFileSync("./src/generated/index.ts", "utf8");
    const updateLicenseIds = "export const licenseIds";
    const index = gen.indexOf(updateLicenseIds);
    const nextSemiColonIndex = gen.indexOf(";", index);

    let licenseContent = "export const licenseIds = ";
    licenseContent += JSON.stringify(licenseIds, null, "\t");
    licenseContent += " as const;";

    if (index > -1 && nextSemiColonIndex > -1) {
      gen =
        gen.slice(0, index) +
        licenseContent +
        gen.slice(nextSemiColonIndex + 1);
    } else {
      console.log("Could not find licenseIds in src/generated/index.ts");
      return;
    }

    writeFileSync("./src/generated/index.ts", gen, "utf8");

    console.log("Generated licenseIds!");
  } catch (err) {
    console.error(err);
  }
};

export const getSolidityVersions = async () => {
  const res = (await (
    await fetch(SOLIDITY_VERSION_URL)
  ).json()) as SolVersionResType[];

  const versions = res
    .reduce((acc, ver) => [...acc, ver.tag_name], [] as string[])
    .filter((version) => version.startsWith("v"))
    .map((version) => version.slice(1));

  const solVersion: Record<string, string> = {};

  for (const version of versions) {
    solVersion[version] = version;
    solVersion[`^${version}`] = `^${version}`;
  }

  solVersion["0.7.x"] = ">=0.7.0 < 0.8.0";
  solVersion["0.8.x"] = ">=0.8.0 <0.9.0";

  return solVersion;
};

export const genSolidityVersions = async () => {
  try {
    const solVersions = await getSolidityVersions();

    let gen = readFileSync("./src/generated/index.ts", "utf8");
    const updateSolidityVersions = "export const solidityVersions";

    const index = gen.indexOf(updateSolidityVersions);
    const nextSemiColonIndex = gen.indexOf(";", index);

    let solidityVersionsContent = "export const solidityVersions = ";
    solidityVersionsContent += JSON.stringify(solVersions, null, "\t");
    solidityVersionsContent += " as const;";

    if (index > -1 && nextSemiColonIndex > -1) {
      gen =
        gen.slice(0, index) +
        solidityVersionsContent +
        gen.slice(nextSemiColonIndex + 1);
    } else {
      console.error(
        "Could not find solidityVersions in src/generated/index.ts",
      );
      return;
    }

    writeFileSync("./src/generated/index.ts", gen, "utf8");

    console.log("Generated solidity versions!");
  } catch (err) {
    console.error(err);
  }
};

genLicenseIds();
genSolidityVersions();
