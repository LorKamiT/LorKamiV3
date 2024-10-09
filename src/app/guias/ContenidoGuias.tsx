import CodeBox from "@/components/Codebox/CodeBox";

import { RiErrorWarningLine } from "react-icons/ri";
import { FaCloudArrowDown } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import Image from "next/image";

import DNS from "../../../public/Guias/DNS/DNS.webp";
import DNSInProgress from "../../../public/Guias/DNS/DNSInProgress.webp";
import DNSCheck from "../../../public/Guias/DNS/DNSCheck.webp";
import Https from "../../../public/Guias/DNS/Https.webp";

export default function ContenidoGuias() {
  return (
    <div className="guide-content mt-32">
      <div id="Crear-ReactJS" className="section">
        <h2 className="timeline-title dark:text-white">
          Crear proyecto con ReactJS
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Primeros pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir la carpeta creada, abrir la terminal y
                poner el siguente comando, remplazando "nombre" por el nombre
                del proyecto, siempre haciendolo en minusculas.
              </p>
              <CodeBox id="CrearProyectoReactJS" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">
                Eliminar y modificar los archivos dentro de la carpeta src:
              </h3>
              <p>
                Esto es recomendable hacerlo, ya que seria la manera mas facil
                de iniciar un proyecto.
              </p>
              <p>
                - Eliminar todos los archivos dentro de la carpeta src,
                exceptuando index.js, index.css, App.js y App.css
              </p>
              <p>
                - Dentro del archivo index.js en la carpeta src, eliminar la
                linea 5 y 14 las cuales son de reportWebVitals
              </p>
              <p>
                - Dentro de la carpeta src, crear las sub-carpetas components,
                images y pages
              </p>
              <div className="Caja-Advertencia Azul Caja-Advertencia Azul dark:rounded-md dark:bg-[#071318] dark:text-[#b8e7fb]">
                <RiErrorWarningLine />
                <p>
                  Opcional, pero muy util para ahorrar trabajo. Descargar los
                  archivos ya seteados para un inicio rapido
                </p>
              </div>
              <div className="Caja-Descarga">
                <a href={siteConfig.links.basereact} download>
                  <button className="dark:bg-[#82c3f8] dark:text-[#091520] dark:hover:bg-[#42a5f5]">
                    <FaCloudArrowDown /> DESCARGAR ARCHIVOS
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Instalar librerias mas utilizadas</h3>
              <p>- react-router-dom: Para el enrutado de paginas</p>
              <p>
                - gh-pages: Para poder subir directamente una build a Github
              </p>
              <p>
                - react-icons --save y @react-icons/all-files --save para usar
                los iconos de la libreria de React
              </p>
              <CodeBox id="LibreriasMasUtilizadas" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              4
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Configurar ReactDOM</h3>
              <div className="Caja-Advertencia Amarillo dark:rounded-md dark:bg-[#191207] dark:text-[#fcdfb5]">
                <RiErrorWarningLine />
                <p>
                  Si estas usando los archivos descargados y pre-configurados,
                  mencionados en el paso 2, puedes omitir esta parte, hasta el
                  "Deployar con Github Pages"
                </p>
              </div>
              <p>
                - Actualmente esta es la mejor configuración para el enrutado
                dentro de "App.js"
              </p>
              <CodeBox id="HashRouterQueUsoActualmente" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              5
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Iniciar proyecto</h3>
              <p>
                Cuado completes todos los pasos anterior, solo queda iniciar el
                proyecto desde la consola de VScode.
              </p>
              <p>
                Antes de iniciar el proyecto, no te olvides de usar el comando
                "cd nombreproyecto" para ir directamente a la raiz del proyecto.
              </p>
              <CodeBox id="IniciarProyectoReact" />
            </div>
          </div>
        </div>
      </div>

      <div id="Crear-NextJS" className="section">
        <h2 className="timeline-title dark:text-white">
          Crear proyecto con NextJS + Tailwind CSS
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Primeros pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir la carpeta creada, abrir la terminal y
                poner el siguente comando.
              </p>
              <CodeBox id="InstalarNextJS" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Instalación</h3>
              <div className="Caja-Advertencia Azul dark:rounded-md dark:bg-[#071318] dark:text-[#b8e7fb]">
                <RiErrorWarningLine />
                <p>
                  Al momento de poner el comando para la creación del proyecto
                  de NextJS nos dara a elegir, que es lo que queremos instalar.
                </p>
              </div>
              <p>
                - Nombre del proyecto: Aqui pones el nombre de nuestro proyecto,
                o dejarlo en blanco, y se asignara uno automaticamente.
              </p>
              <p>- TypeScript: No se que es, pero es recomendable incluirlo.</p>
              <p>- ESLint: No se que es, pero es recomendable incluirlo</p>
              <p>
                - Tailwind CSS: Ya sabes lo que es. Tu sabras si quieres que te
                explote el craneo usando Tailwind xd
              </p>
              <p>
                - Usar src/directory: Es para usar una estructura de archivos,
                que ya conocemos gracias a React Native
              </p>
              <p>
                - App Router: Muy parecido a lo que usabamos en React Native.
                Solo que mas facil aqui en NextJS
              </p>
              <p>
                - import alias (@/*): Es para usar @ en lugar de ../ para
                importar cosas
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">
                Base pre fabricada para NextJS + Tailwind
              </h3>
              <p>
                He modificado varios archivos de NextJS para un inicio mas
                rapido
              </p>
              <p>- Eliminar la carpeta "src"</p>
              <p>- Eliminar el archivo "tailwind.config.ts"</p>
              <p>
                Descargar el siguente rar para aplicar los archivos modificados
                para iniciar rapido.
              </p>
              <div className="Caja-Descarga">
                <a href={siteConfig.links.basenext} download>
                  <button>
                    <FaCloudArrowDown /> DESCARGAR ARCHIVOS
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              4
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">
                Instalar dependencias para la base de NextJS
              </h3>
              <div className="Caja-Advertencia Amarillo dark:rounded-md dark:bg-[#191207] dark:text-[#fcdfb5]">
                <RiErrorWarningLine />
                <p>
                  Este paso es importante para que funcione la base
                  correctamente
                </p>
              </div>
              <p>
                - npm i next-themes (Para el uso del tema dark y light para la
                pagina)
              </p>
              <p>- npm i clsx (npi pero es necesario)</p>
              <p>
                - npm i react-icons --save (Para usar los iconos de toda la
                vida)
              </p>
              <p>
                - npm install -D prettier prettier-plugin-tailwindcss (Para que
                el plugin Prettier formatee nuestro codigo de Tailwind, y lo
                deje ordenado.)
              </p>
              <CodeBox id="InstalarDependenciasNextJS" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              5
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Iniciar proyecto</h3>
              <p>Ahora, solo queda iniciar nuestro nuevo proyecto de NextJS</p>
              <CodeBox id="IniciarProyectoNextJS" />
            </div>
          </div>
        </div>
      </div>

      <div id="Deployar-Github" className="section">
        <h2 className="timeline-title dark:text-white">
          Deployar proyecto con Github
        </h2>

        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                Dentro del package.json, se deberan configurar tres lineas de
                codigo
              </p>
              <p>
                - Al principio del package.json, por debajo de "name" escribir
                "home" y poner nuestro link "https://pagina.xyz/".
              </p>
              <p>
                - En caso no contar con un dominio, se pueda utilizar el
                siguente link: "https://lorkamiT.github.io/Proyecto"
              </p>
              <p>
                - En el area de "scripts" poner las dos ultimas lineas de codigo
                de build y gh-pages
              </p>
              <CodeBox id="ConfiguracionPackageJson" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Crear archivo CNAME</h3>
              <p>
                - Dentro de la carpeta public, crear un nuevo archivo llamado
                "CNAME"
              </p>
              <p>
                - Dentro del CNAME pondremos nuestra pagina en el siguente
                formato "pagina.xyz".
              </p>
              <p>
                - Y en caso de ser pagina de Github, debe ser asi
                "https://lorkami.github.io/Proyecto"
              </p>
              <CodeBox id="DatosParaElCNAME" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">
                Configurar DNS en el proveedor de dominios
              </h3>
              <p>
                Una vez teniendo ya la web comprada, ir a la configuración de
                DNS
              </p>
              <p>
                - Agregar las DNS proporcionadas por Github, en Tipo: A. Host: @{" "}
              </p>
              <p>
                - Si existe algun CNAME modificarlo/crearlo. Type: CNAME. Host:
                www. "pagina.xyz"
              </p>
              <CodeBox id="DNSGithub" />
              <Image src={DNS} alt="DNS-Ejemplo" width={800} height={800} />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              4
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Crear repositorio de Github</h3>
              <p>- Se debe crear un nuevo repositorio de Github en publico</p>
              <p>
                - Copiar todas las lineas de codigo, omitiendo "echo "#
                Proyecto" {">>"} README.md" y en "git add README.md" borrar el
                "README.md" y solo dejar un punto, como se muestra a
                continuación.
              </p>
              <CodeBox id="EjemploCodigoGithub" />
              <p>
                Si se copia este codigo directamente, cambiar la penultima
                linea, la del link del Github, la parte final donde dice
                "Proyecto.git" por el nombre del proyecto actual
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              5
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Deployar con Github</h3>
              <p>
                - Una vez que se subieron todos los archivos a Github con los
                codigos anteriores, vamos a usar el siguente codigo.
              </p>
              <CodeBox id="CodigoDeployarGithub" />
              <div className="Caja-Advertencia Rojo dark:rounded-md dark:bg-[#160b0b] dark:text-[#dcb3b3]">
                <RiErrorWarningLine />
                <p>
                  Al usar el codigo "npm run deploy". Es casi seguro que te de
                  un error de seguridad o permisos de Windows. Para eso, vamos a
                  usar el siguente codigo:
                </p>
              </div>
              <CodeBox id="CodigoDeployarGithubConCodigoExtra" />
              <p>
                - Con este codigo, vamos a desactivar y volver a activar para
                poder ejecutar el codigo.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              6
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Deployar con Github</h3>
              <p>
                - En Github dentro de Settings y Pages, ir hasta la seccion
                "Custom domain" en donde se podra observar en un color amarillo,
                que la DNS se esta revisando.
              </p>
              <p>
                - Debajo hay que activar la casilla de "Enforce HTTPS" para
                activar la web segura.
              </p>
              <Image
                src={DNSInProgress}
                alt="DNS-Ejemplo"
                width={800}
                height={800}
              />
              <Image
                src={DNSCheck}
                alt="DNS-Ejemplo"
                width={800}
                height={800}
              />
              <Image src={Https} alt="DNS-Ejemplo" width={800} height={800} />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              7
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Push y Pull de Github</h3>
              <p>
                Comandos para subir cambios de PC a Github, o actualizar cambios
                de Github a PC.
              </p>
              <CodeBox id="CodigoPushPullGithub" />
            </div>
          </div>
        </div>
      </div>

      <div id="Deployar-Vercel" className="section">
        <h2 className="timeline-title dark:text-white">
          Deployar proyecto con Vercel
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Instalar CLI Vercel</h3>
              <div className="Caja-Advertencia Amarillo dark:rounded-md dark:bg-[#191207] dark:text-[#fcdfb5]">
                <RiErrorWarningLine />
                <p>
                  No lo tengo comprobado, pero creo que solo con los pasos
                  siguentes, vercel hace su propia "build" y lo sube directo a
                  Vercel.
                </p>
              </div>
              <CodeBox id="CodigoInstalarVercel" />
              <p>
                Despues de instalar vercel, y poner el codigo de "vercel login"
                brira una ventana en el explorador en donde iniciaremos sesion
                en la pagina de Vercel.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Configuración</h3>
              <p>
                Despues de haber iniciado sesion con vercel, simplemente
                ingresar el comando "vercel"
              </p>
              <div className="Caja-Advertencia Rojo dark:rounded-md dark:bg-[#160b0b] dark:text-[#dcb3b3]">
                <RiErrorWarningLine />
                <p>
                  Puede que se reciba un mensaje de error en la consola al
                  utilizar el comandos "vercel" El error que se muestra indica
                  que la ejecución de scripts está deshabilitada en el sistema y
                  por lo tanto, no se puede cargar el archivo vercel.ps1
                  necesario para ejecutar el comando vercel
                </p>
              </div>
              <p>Basicamente al igual que lo hicimos con Github</p>
              <CodeBox id="CodigoInstalarVercelbConCodigoExtra" />
              <p>
                - En la ventana de configuración, selecciona el proyecto de
                React.
              </p>
              <p>
                - Cuando se te solicite el directorio de la aplicación,
                asegúrate de especificar la carpeta de compilación de tu
                proyecto de React. Por lo general, es build o dist
              </p>
              <p>
                - A lo largo de las configuraciónes te pedira usar
                configuraciónes predeterminadas o personalizadas.
              </p>
              <p>
                - Después de completar la configuración, se desplegará el
                proyecto en Vercel.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Actualizar/Deployar</h3>
              <p>
                Para actualizar algun cambio a nuestro proyecto de vercel, se
                utilizara el siguente comando
              </p>
              <div className="Caja-Advertencia Rojo dark:rounded-md dark:bg-[#160b0b] dark:text-[#dcb3b3]">
                <RiErrorWarningLine />
                <p>
                  Puede que se reciba un mensaje de error en la consola al
                  utilizar el comandos "vercel --prod" El error que se muestra
                  indica que la ejecución de scripts está deshabilitada en el
                  sistema y por lo tanto, no se puede cargar el archivo
                  vercel.ps1 necesario para ejecutar el comando vercel
                </p>
              </div>
              <CodeBox id="CodigoDeployarVercelbConCodigoExtra" />
            </div>
          </div>
        </div>
      </div>

      <div id="Metadados" className="section">
        <h2 className="timeline-title dark:text-white">
          Metadatos para la pagina
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Metatados</h3>
              <p>
                Estos tienen que ser introducidos dentro del archivo index.html
                de la carpeta "public"
              </p>
              <p>Metadatos de edición rapida:</p>
              <CodeBox id="MetadatosEdicionRapida" />
              <p>Metadatos Organizados:</p>
              <CodeBox id="MetadatosEdicionOrganizada" />
            </div>
          </div>
        </div>
      </div>

      <div id="Font-personalizada" className="section">
        <h2 className="timeline-title dark:text-white">Font personalizada</h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                Se crea una carpeta llamada "fonts" dentro de la carpeta public.
                Ahi se ponen los archivos de la font.
              </p>
              <CodeBox id="FontPersonalizada" />
            </div>
          </div>
        </div>
      </div>

      <div id="Scrollbar" className="section">
        <h2 className="timeline-title dark:text-white">ScrollBar</h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                Facil, codigo CSS para cambiar el diseño del scrollbar de la
                pagina.
              </p>
              <CodeBox id="ScrollBar" />
            </div>
          </div>
        </div>
      </div>

      <div id="Responsive" className="section">
        <h2 className="timeline-title dark:text-white">ScroResponsivellBar</h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>Resoluciones de PC, laptop, tableta y celular.</p>
              <CodeBox id="Responsive" />
            </div>
          </div>
        </div>
      </div>

      <div id="ImageMagick" className="section">
        <h2 className="timeline-title dark:text-white">
          Conversor de imagenes con Magick
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Instalar Magick</h3>
              <p>
                Con esta herramienta, permite convertir las imagenes .png .jpg y
                cualquier otro formato a un formato .webp, el cual es
                recomendable para cuando se cargan muchas imagenes, ya que esto
                reduce su peso de forma considerable sin perder la calidad de
                estas.
              </p>
              <div className="Caja-Descarga">
                <a
                  href="https://imagemagick.org/script/download.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    <FaCloudArrowDown /> LINK MAGICK
                  </button>
                </a>
              </div>
              <p>
                - Despues de instalar hay que reiniciar el pc para que detecte
                la linea de codigos.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4">Paso 2</h3>
              <p>
                - Abrir la terminal de comandos directamente en la carpeta donde
                estan alojadas las imagenes y usar los siguentes comandos
                dependiendo la extension de la imagen.
              </p>
              <CodeBox id="MagickCrearWebpPNG" />
              <CodeBox id="MagickCrearWebpJPG" />
              <CodeBox id="MagickCrearWebpJPEG" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                - Despues de utilizar el comando y convertir todas las imagenes
                a .webp, las imagenes originales se mantendran dentro de la
                carpeta, para eso, ingresaremos el siguente comando para
                eliminar las imagenes.
              </p>
              <p>
                del *.png (El .png se puede cambiar por .jpg, .jpeg y otros.)
              </p>
              <CodeBox id="MagickEliminarIMGPNG" />
              <CodeBox id="MagickEliminarIMGJPG" />
              <CodeBox id="MagickEliminarIMGJPEG" />
            </div>
          </div>
        </div>
      </div>

      <div id="PowerToys" className="section">
        <h2 className="timeline-title dark:text-white">
          Renombrar imagenes de forma masiva con PowerToys
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                Con esta herramienta la cual se baja directamente desde la
                Microsoft Store, tiene muchas herramientas, como la de renombrar
                de forma masiva archivos la cual nos va a ayudar para agregar y
                reorganizar las imagenes de galeria.
              </p>
              <p>
                - Quitar numerologia de las imagenes, y crear numerologia de
                imagenes repetidas
              </p>
              <p>
                - En el primero recuadro "Buscar" ponemos el siguente codigo
                ^\d+\s-\s
              </p>
              <CodeBox id="PowerToysQuitarNumerologia" />
              <p>
                La cual va a quitar numerologia de las imagenes, y crear
                numerologia de imagenes repetidas
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>
                - Ahora vamos a volver a crear la numerologia de forma correcta
              </p>
              <p>
                - En el recuadro de "Buscar" ponemos el nombre de la aplicación
                de la cual estamos modificando, la cual puede ser "Fivem, REDM,
                Fornite etc"
              </p>
              <p>
                - En el recuadro de "Reemplazar por" poner el siguente codigo
                &#36;&#123;start=1&#125; -
              </p>
              <CodeBox id="PowerToysCrearNumerologia" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <p>- Quitar la numerologia de imagenes repetidas</p>
              <p>
                En el recuadro de "Buscar" ponemos \s*\(\d+\) Y con eso deberia
                quedar todas las imagenes renombradas correctamente.
              </p>
              <CodeBox id="PowerToysCQuitarNumerologiaRepetida" />
            </div>
          </div>
        </div>
      </div>

      {/* Codigo para crear nueva secion */}
      {/* <div id="ID-Seccion" className="section">
        <h2 className="timeline-title dark:text-white">
          Titulo de la nueva sección
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3 className="mb-4" >Paso 1</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <CodeBox id="InstalarNextJS" />
              <div className="Caja-Advertencia Amarillo dark:rounded-md dark:bg-[#191207] dark:text-[#fcdfb5]">
                <RiErrorWarningLine />
                <p></p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              2
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3>Paso 2</h3>
              <p></p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              3
            </div>
            <div className="timeline-content dark:text-white dark:shadow-customdark">
              <h3>Pase 3</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
