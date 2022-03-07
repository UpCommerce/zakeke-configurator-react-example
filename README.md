# Zakeke Configurator for React

This library let you build a custom UI for the Zakeke 3D configurator tool.

## How to install and run a basic example

       git clone https://github.com/UpCommerce/zakeke-configurator-react-example.git
       npm install
       npm run start

After running the example you will see a blank page running on `localhost:3000` , that because Zakeke must have some parameters to know what product to load. 
The parameters are automatically sent from the plugins with a postMessage but, for testing, we can pass them as query string in the URL.
The easisest way to have all the parameters is:

 1. Go in Zakeke configurator backoffice
 2. Add or edit a new product
 3. Go in the Shopping Preview page
 4. Right click on the page -> inspect element
 5. Find the zakeke `<iframe>` src attribute and copy all query string parameters
 6. Paste the parameters in the localhost page. 
You should have something like:
http://localhost:3000?modelCode=XXX&culture=XX&token=XXXXXX....

With these parameter you should see the product loading in a basic UI interface. 
You can start customizing it.

## References
The library exposes 3 elements:

 - a ZakekeEnvironment class that contains the state of the current scene
 - a ZakekeProvider react component that should wrap your application
 - a ZakekeViewer react component that will render the 3D scene
 - a useZakeke effect to get the data and methods to execute

A basic Zakeke theme should be like:

 

       const zakekeEnvironment  =  new  ZakekeEnvironment();
       	<ZakekeProvider environment={zakekeEnvironment}> 
        	<div>
        		<ZakekeViewer  />
        	</div>
        </ZakekeProvider>;

## Properties and methods
price: number;
culture: string;
currency: string;
isSceneLoading: boolean;
isAddToCartLoading: boolean;
isViewerReady: boolean;
fonts: FontFamily[];
groups: Group[];
templates: Template[];
currentTemplate: Template | null;
items: Item[];
productName: string;
productCode: string;
product: Product | null;
cameras: Camera[];

selectOption: (optionId: number) =>  void;
setTemplate: (templateId: number) =>  void;
isAreaVisible: (areaId: number) =>  boolean;

saveComposition: () =>  Promise<string>;
loadComposition: (id: string) =>  Promise<void>;
addToCart: (additionalProperties: Record<string, any>) =>  Promise<void>;

getPDF: () =>  Promise<string>;
getOnlineScreenshot: (width: number, height: number, backgroundColor?: string, padding?: number) =>  Promise<string>;

setCamera: (id: string, onlyAngleOfView?: boolean, animate?: boolean) =>  void;
setCameraByName: (name: string, onlyAngleOfView?: boolean, animate?: boolean) =>  void;
setCameraZoomEnabled: (enabled: boolean) =>  void;
resetCameraPivot: () =>  void;
setCameraPivot: (meshId: string) =>  void;

getImages: (categoryId: number) =>  Promise<Image[]>;
getMacroCategories: () =>  Promise<ImageMacroCategory[]>;
previewOnly__setItemImageFromBase64: (guid: string, base64: string) =>  void;

setItemImageFromFile: (guid: string, file: File) =>  Promise<void>;
addItemImage: (id: number, areaId: number) =>  Promise<void>;
createImage: (file: File, progress?: (percentage: number) =>  void) =>  Promise<Image>;
createImageFromUrl: (url: string) =>  Promise<Image>;
setItemImage: (guid: string, imageId: number) =>  Promise<void>;
setItemFontFamily: (guid: string, fontFamily: string) =>  void;
setItemColor: (guid: string, color: string) =>  void;
setItemBold: (guid: string, bold: boolean) =>  void;
setItemItalic: (guid: string, italic: boolean) =>  void;
setItemText: (guid: string, text: string) =>  void;
addItemText: (settings: { text: string, fontFamily: string }, areaId: number) =>  Promise<void>;
removeItem: (guid: string) =>  Promise<void>;

switchFullscreen: () =>  void;
isFullscreenMode: boolean;
zoomIn: () =>  void;
zoomOut: () =>  void;

updateView: (adjustCamera?: boolean) =>  void;
setHighlightSettings: (settings: { color: string, size: number }) =>  void;
hasExplodedMode: () =>  boolean;
isExplodedMode: boolean;
setExplodedMode: (exploded: boolean) =>  void;

// Scene manipulation
getMeshIDbyName: (name: string) =>  string | undefined | null,
hideMeshAndSaveState: (meshId: string) =>  void,
restoreMeshVisibility: (meshId: string) =>  void,
setMeshDesignVisibility: (meshId: string, visible: boolean) =>  void,

// Events
clearListeners: () =>  void;
addFocusAttributesListener: (listenerFunction: FocusAttributesEventListener) =>  void;
focusAttribute: (attributeId: number) =>  void;

// AR
getQrCodeArUrl: (device: 'iOS' | 'Android') =>  Promise<string>;
getMobileArUrl: (useCacheWithDesign?: boolean) =>  Promise<string | null>;
openArMobile: (url: string) =>  void;
isSceneArEnabled: () =>  boolean;

IS_ANDROID: boolean;
IS_IOS: boolean;

setBackgroundColor: (color: string, alpha: number) =>  void;