exports.loadSettings = () => {
    return fetch('/settings.json')
    .then(response => response.json())
    .then(settings =>
    {
        const welcomeText = settings.welcomeText;
        const modules = settings.modules;
        let tiles = [];
        
        for (var i=0; i<modules.length; i++) {
            const moduleName = modules[i].name;
            const modulePath = modules[i].path;
            const moduleSettingsPath = modules[i].settingsPath;
            const moduleFramePath = modules[i].framePath;

            let resolvedModuleSettingsPath = `./modules/${ moduleName}/settings.json`;

            if (modulePath)
                resolvedModuleSettingsPath = `${ modulePath.replace(/\/$/, "") }/settings.json`; // Remove trailing slash of path before concatenation
                
            if (moduleSettingsPath)
                resolvedModuleSettingsPath = moduleSettingsPath;

            fetch(resolvedModuleSettingsPath)
            .then(r => r.json())
            .then(jsonSettings => {
                const moduleFolderPath = resolvedModuleSettingsPath.substring(0, resolvedModuleSettingsPath.lastIndexOf("/"));
                
                let moduleIndexPath = `${ moduleFolderPath }/index.html`;

                if (jsonSettings.indexFilePath)
                    moduleIndexPath = jsonSettings.indexFilePath;

                fetch(moduleIndexPath)
                .then(r => r.text())
                .then(htmlContent => {
                    let tile = {
                        settings: jsonSettings,
                        content: htmlContent,
                        modulePath: moduleIndexPath
                    };

                    if (jsonSettings.jsAssets)
                        tile['jsAssets'] = jsonSettings.jsAssets;
                    
                    tiles.push(tile);
                })
                .catch(err => console.log('Failed to parse module content ', err));
            })
            .catch(err => console.log('Failed to parse module settings: ', err));
        }

        return {
            welcomeText: welcomeText,
            modules: tiles
        }

    }); 
}