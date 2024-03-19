
# Carina Vergara Landing Page

Landing page desarrollada exclusivamente por Nexus para Carina Vergara

## Reusable Components

```javascript
import React from "react";
import TitlesH2 from "../tags/TitlesH2";

const Component = (): React.ReactElement => {
    return (
        <div>
            <TitlesH2 text="Titulo H2" classname="optional"/>
        </div>
    )
}
```



```javascript
import React from "react";
import Carrousel from "./Carrousel";

const Component = (): React.ReactElement => {
    return (
        <div>
            <Carrousel 
            isAnImage={boolean} 
            classname="optional" 
            imgSource={['optional']} 
            imgClassname="optional"
        />
        </div>
    )
}
```

```javascript
import React from "react";
import ContactMe from "../buttons/ContactMe";

const Component = (): React.ReactElement => {
    return (
        <div>
            <ContactMe text="Contact me" link="www.google.com" classname="optional" />
        </div>
    )
}
```

```javascript
import { Button } from "@mui/material";
import React from "react";

const Component = (): React.ReactElement => {
    return (
        <div>
            <SelectPlanButton to='link' styles={{display: 'flex'}} buttonText="button"/>
        </div>
    )
}
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/NexusDigitalWeb/CarinaVergara-Landing-page.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Build

```bash
  npm run build
```

