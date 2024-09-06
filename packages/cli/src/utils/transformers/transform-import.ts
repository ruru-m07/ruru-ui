import { Transformer } from "@/utils/transformers";

export const transformImport: Transformer = async ({ sourceFile, config }) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  for (const importDeclaration of importDeclarations) {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    // Replace @/registry/[style] with the components alias.
    // if (moduleSpecifier.startsWith("@/registry/")) {
    //   if (config.aliases.ui) {
    //     importDeclaration.setModuleSpecifier(
    //       moduleSpecifier.replace(/^@\/registry\/[^/]+\/ui/, config.aliases.ui)
    //     );
    //   } else {
    //     importDeclaration.setModuleSpecifier(
    //       moduleSpecifier.replace(
    //         /^@\/registry\/[^/]+/,
    //         config.aliases.components
    //       )
    //     );
    //   }
    // }

    // Replace `import { cn } from "@/utils/cn";`
    if (moduleSpecifier == "@/utils/cn") {
      const namedImports = importDeclaration.getNamedImports();
      const cnImport = namedImports.find((i) => i.getName() === "cn");

      if (cnImport) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(/^@\/utils\/cn/, config.aliases.utils),
        );
      }
    }

    // Replace `import { Button } from "ruru-ui/components/button";` want to repace ruru-ui/components/ with the components alias.
    if (moduleSpecifier.startsWith("ruru-ui/components/")) {
      importDeclaration.setModuleSpecifier(
        moduleSpecifier.replace(
          /^ruru-ui\/components/,
          config.aliases.components,
        ),
      );
    }

    // Replace `import { type RuruProviderProps } from "@/interface/RuruProviderProps";`
    if (
      moduleSpecifier.startsWith("@/interface/") &&
      config.aliases.interfaces
    ) {
      console.log(moduleSpecifier);
      if (config.aliases.ui) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(
            /^@\/interface\/[^/]+\/ui/,
            config.aliases.interfaces,
          ),
        );
      } else {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(
            /^@\/interface\/[^/]+/,
            config.aliases.interfaces,
          ),
        );
      }
    }
  }

  return sourceFile;
};
