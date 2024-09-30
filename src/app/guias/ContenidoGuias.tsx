import CodeBox from "@/components/Codebox/CodeBox";

import { RiErrorWarningLine } from "react-icons/ri";
import { FaCloudArrowDown } from "react-icons/fa6";

export default function ContenidoGuias() {
  return (
    <div className="guide-content mt-32">
      <div id="seccion1" className="section">
        <h2 className="timeline-title dark:text-white">
          Crear proyecto con ReactJS
        </h2>
        <div className="timeline dark:before:bg-[#1d2126]">
          <div className="timeline-item">
            <div className="timeline-icon dark:border dark:border-white dark:bg-[#0f1214] dark:text-white">
              1
            </div>
            <div className="timeline-content dark:shadow-customdark dark:text-white">
              <h3>Primeros pasos:</h3>
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
            <div className="timeline-content dark:shadow-customdark dark:text-white">
              <h3>
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
              <div className="Caja-Advertencia Azul">
                <RiErrorWarningLine />
                <p>
                  Opcional, pero muy util para ahorrar trabajo. Descargar los
                  archivos ya seteados para un inicio rapido
                </p>
              </div>
              <div className="Caja-Descarga">
                <a href="/descargas/Base-inicial-para-React.rar" download>
                  <button>
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
            <div className="timeline-content dark:shadow-customdark dark:text-white">
              <h3>Instalar librerias mas utilizadas</h3>
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
            <div className="timeline-content dark:shadow-customdark dark:text-white">
              <h3>Configurar ReactDOM</h3>
              <div className="Caja-Advertencia Amarillo">
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
            <div className="timeline-content dark:shadow-customdark dark:text-white">
              <h3>Iniciar proyecto</h3>
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
    </div>
  );
}
