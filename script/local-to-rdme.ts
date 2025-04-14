import { promises as fs } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { printError, printInfo, printSuccess } from './utils';

const ROOT_DIR = path.resolve(__dirname, '..');
const JSON_DIR = path.join(ROOT_DIR, 'reference');
const YAML_DIR = path.join(ROOT_DIR, 'reference-yml');

/**
 * Checks if a file is a YAML file.
 *
 * @param file - The path to the file.
 * @returns
 */
function isYamlFile(file: string): boolean {
  return path.extname(file).toLowerCase() === '.yml';
}

/**
 * Converts a YAML file to a JSON string.
 *
 * @param filePath - The path to the YAML file.
 * @returns
 */
async function convertYamlToJson(filePath: string): Promise<string> {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const yamlData = yaml.load(fileContent);
  return JSON.stringify(yamlData, null, 2);
}

/**
 * Converts all YAML files in the reference-yml directory to JSON format.
 */
async function processFiles(): Promise<void> {
  try {
    await fs.mkdir(JSON_DIR, { recursive: true });
    const files = await fs.readdir(YAML_DIR);
    const yamlFiles = files.filter(isYamlFile);

    const conversions = yamlFiles.map(async (file) => {
      const yamlFilePath = path.join(YAML_DIR, file);
      const jsonContent = await convertYamlToJson(yamlFilePath);

      const jsonFileName = `${path.basename(file, '.yml')}.json`;
      const jsonFilePath = path.join(JSON_DIR, jsonFileName);

      await fs.writeFile(jsonFilePath, jsonContent, 'utf8');
      printInfo(`Synced reference/${jsonFileName}`);
    });

    await Promise.all(conversions);
    printSuccess('Synced local changes to ReadMe');
  } catch (error) {
    printError(`Error processing files: ${error}`);
  }
}

processFiles();
