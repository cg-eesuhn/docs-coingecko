import { promises as fs } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { printError, printSuccess, printInfo } from './utils';

const ROOT_DIR = path.resolve(__dirname, '..');
const JSON_DIR = path.join(ROOT_DIR, 'reference');
const YAML_DIR = path.join(ROOT_DIR, 'reference-yml');

/**
 * Checks if a file is a JSON file
 *
 * @param file Path to the file
 * @returns
 */
function isJsonFile(file: string): boolean {
  return path.extname(file).toLowerCase() === '.json';
}

/**
 * Converts a JSON file to YAML format
 *
 * @param filePath Path to the JSON file
 * @returns
 */
async function convertJsonToYaml(filePath: string): Promise<string> {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const jsonData = JSON.parse(fileContent);
  return yaml.dump(jsonData);
}

/**
 * Converts all JSON files in the reference directory to YAML format
 */
async function processFiles(): Promise<void> {
  try {
    await fs.mkdir(YAML_DIR, { recursive: true });
    const files = await fs.readdir(JSON_DIR);
    const jsonFiles = files.filter(isJsonFile);

    const conversions = jsonFiles.map(async (file) => {
      const jsonFilePath = path.join(JSON_DIR, file);
      const yamlContent = await convertJsonToYaml(jsonFilePath);

      const yamlFileName = `${path.basename(file, '.json')}.yml`;
      const yamlFilePath = path.join(YAML_DIR, yamlFileName);

      await fs.writeFile(yamlFilePath, yamlContent, 'utf8');
      printInfo(`Synced reference-yml/${yamlFileName}`);
    });

    await Promise.all(conversions);
    printSuccess('Synced ReadMe changes to local')
  } catch (error) {
    printError(`Error processing files: ${error}`);
  }
}

processFiles();
