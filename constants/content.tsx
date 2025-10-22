import React from 'react';
import type { DocPage, Tool } from '../types';
import { ToolCategory } from '../types';

export const DOC_PAGES: DocPage[] = [
  {
    id: 'introduction',
    title: 'Introducción a SableOS',
    content: (
      <>
        <p className="mb-4 text-lg">
          Bienvenido al manual de usuario oficial de SableOS. Esta guía está diseñada para ayudarte a comprender y utilizar todo el potencial de tu sistema.
        </p>
        <p className="mb-4 text-lg">
          SableOS es un sistema operativo especializado de código abierto, construido sobre una base Debian reforzada ("hardened"), meticulosamente diseñado para profesionales de Inteligencia de Fuentes Abiertas (OSINT), analistas de ciberseguridad e investigadores. Como se detalla en su investigación fundacional, SableOS aborda la necesidad crítica de un entorno OSINT unificado, seguro y eficiente, haciendo frente a la fragmentación de herramientas común en el campo.
        </p>
        <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Filosofía Principal</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Seguridad Primero (OPSEC):</strong> Con una superficie de ataque mínima (reducción de más del 60% en servicios activos, máximo 4 puertos activos), SableOS prioriza la seguridad y el anonimato del operador.</li>
          <li><strong>Ligero y Eficiente:</strong> La imagen final del sistema es de aproximadamente 3GB, lo que asegura que funcione sin problemas incluso en sistemas de bajos recursos como máquinas virtuales.</li>
          <li><strong>Flujo de Trabajo Unificado:</strong> Las herramientas no solo están incluidas, sino preconfiguradas para funcionar dentro de una arquitectura de pipeline coherente que refleja el ciclo OSINT: Recolección, Correlación y Almacenamiento.</li>
          <li><strong>Evolutivo:</strong> Construido con la metodología de Gestión de la Evolución del Software (GEM), SableOS incluye un script de actualización automatizado para mantener su conjunto de herramientas actualizado frente al cambiante panorama digital.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-to-use',
    title: 'Cómo Usar Este Manual',
    content: (
      <>
        <p className="mb-4 text-lg">
          Esta documentación es tu guía de referencia central para todo lo relacionado con SableOS. Está estructurada para ayudarte a encontrar la información que necesitas de manera rápida y eficiente, ya seas un usuario nuevo o un analista experimentado.
        </p>
        <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Estructura del Manual</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <strong>Manual de Usuario:</strong> Esta sección contiene la información fundamental sobre el sistema. Comienza con la <em>Introducción</em> para entender la filosofía de SableOS, sigue con los <em>Primeros Pasos</em> para la instalación y finaliza con los <em>Conceptos Clave</em> que explican su arquitectura única. Te recomendamos leer esta sección primero.
          </li>
          <li>
            <strong>Guía de Herramientas:</strong> Aquí encontrarás un listado completo y categorizado de las 41 herramientas preinstaladas en SableOS. Cada entrada funciona como una ficha de referencia rápida, detallando la <em>descripción</em> de la herramienta, un <em>comando de ejemplo</em> para su uso básico y un <em>caso de uso</em> práctico en una investigación real.
          </li>
        </ul>
         <p className="mt-6 text-lg">
          Utiliza la barra de navegación a la izquierda para moverte entre las diferentes secciones y encontrar la herramienta específica que buscas.
        </p>
      </>
    )
  },
  {
    id: 'getting-started',
    title: 'Primeros Pasos',
    content: (
       <>
        <p className="mb-4 text-lg">
          Usar SableOS es sencillo. Puedes ejecutarlo como un sistema en vivo (live) desde una unidad USB para una máxima portabilidad y para no dejar rastro, o instalarlo en una máquina virtual (como VirtualBox o VMware) para un entorno persistente y aislado (sandboxed).
        </p>
        <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Pasos de Instalación (Máquina Virtual)</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Descarga la última imagen <code>.iso</code> de SableOS.</li>
            <li>Crea una nueva máquina virtual, seleccionando "Linux basado en Debian de 64 bits".</li>
            <li>Asigna al menos 2GB de RAM y 20GB de espacio en disco para un rendimiento óptimo.</li>
            <li>Monta el archivo <code>.iso</code> descargado en la unidad óptica virtual de la VM.</li>
            <li>Inicia la VM y sigue las instrucciones del instalador en pantalla.</li>
            <li>Una vez instalado, ejecuta el actualizador del sistema para asegurar que todas las herramientas estén en su última versión.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'core-concepts',
    title: 'Conceptos Clave',
    content: (
       <>
        <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Arquitectura de Pipeline OSINT</h3>
        <p className="mb-4 text-gray-300">SableOS organiza su funcionalidad en torno al ciclo de inteligencia estándar. No es solo una colección de herramientas, sino un flujo de trabajo integrado.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Recolección:</strong> Usa herramientas como theHarvester, Twint y los navegadores personalizados para recopilar datos brutos de fuentes públicas.</li>
            <li><strong>Correlación:</strong> Procesa y conecta puntos de datos con herramientas como Maltego y scripts personalizados de Python/Pandas para revelar patrones e ideas.</li>
            <li><strong>Almacenamiento:</strong> Guarda de forma segura tus hallazgos y evidencias en contenedores cifrados usando VeraCrypt, garantizando la integridad y confidencialidad de los datos.</li>
        </ul>
        <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Evolutividad (GEM)</h3>
        <p className="text-gray-300">El mundo digital cambia constantemente. SableOS está construido para adaptarse. El núcleo de su evolutividad es un script de actualización personalizado que verifica nuevas versiones estables de las herramientas OSINT integradas, permitiendo que el sistema se mantenga relevante sin una reinstalación completa.</p>
       </>
    ),
  }
];

export const TOOLS: Tool[] = [
  // Browsers & Anonymity
  { id: 'custom-firefox', name: 'Navegador Firefox Personalizado', category: ToolCategory.BROWSERS_ANONYMITY, description: 'Un navegador Firefox reforzado en privacidad con complementos OSINT preinstalados para reconocimiento pasivo y recolección de datos.', useCase: 'Realizar investigaciones basadas en la web minimizando tu huella digital. Los complementos incluidos ayudan a analizar tecnologías web, extraer datos y gestionar la información de la sesión.' },
  { id: 'custom-chrome', name: 'Navegador Chrome Personalizado', category: ToolCategory.BROWSERS_ANONYMITY, description: 'Un navegador Google Chrome personalizado con extensiones OSINT preinstaladas, útil para investigaciones que requieren la integración de servicios de Google.', useCase: 'Aprovechar el ecosistema de Chrome para OSINT, usando extensiones para encontrar información de contacto, analizar perfiles de redes sociales y realizar búsquedas de imágenes inversas directamente desde el navegador.' },
  { id: 'tor-browser', name: 'Navegador Tor', category: ToolCategory.BROWSERS_ANONYMITY, description: 'El Navegador Tor enruta tu tráfico web a través de la red Tor, proporcionando un alto grado de anonimato para investigaciones sensibles.', useCase: 'Acceder a sitios .onion en la dark web o investigar temas sensibles sin revelar tu dirección IP real. Esencial para la seguridad operacional (OPSEC).' },
  // General Recon
  { id: 'amass', name: 'Amass', category: ToolCategory.GENERAL_RECON, description: 'Una potente herramienta para el mapeo de redes en profundidad y el descubrimiento de superficies de ataque utilizando la recopilación de información de fuentes abiertas y técnicas de reconocimiento activo.', command: 'amass enum -d example.com', useCase: 'Descubrir todos los subdominios, ASNs y rangos de IP asociados con una organización objetivo para construir un mapa de infraestructura completo.' },
  { id: 'theharvester', name: 'theHarvester', category: ToolCategory.GENERAL_RECON, description: 'Recopila correos electrónicos, subdominios, hosts, nombres de empleados, puertos abiertos y banners de diferentes fuentes públicas como motores de búsqueda, servidores de claves PGP y SHODAN.', command: 'theharvester -d example.com -l 500 -b google,linkedin', useCase: 'Realizar un reconocimiento inicial de una empresa para recopilar direcciones de correo electrónico para una prueba de ingeniería social o para identificar servidores web expuestos externamente.' },
  { id: 'recon-ng', name: 'Recon-NG', category: ToolCategory.GENERAL_RECON, description: 'Un framework de Reconocimiento Web con todas las funciones escrito en Python. Completo con módulos independientes, interacción con bases de datos y funciones de conveniencia integradas.', command: 'recon-cli -m recon/domains-hosts/bing_domain_web -e "SOURCE=example.com"', useCase: 'Ejecutar un flujo de trabajo modular y automatizado para recopilar sistemáticamente información sobre un objetivo, almacenando los resultados en una base de datos estructurada para su posterior análisis.' },
  { id: 'subbrute', name: 'SubBrute', category: ToolCategory.GENERAL_RECON, description: 'Un spider de meta-consultas DNS que enumera registros DNS y subdominios utilizando una extensa lista de palabras y resolutores DNS abiertos.', command: 'python subbrute.py example.com', useCase: 'Encontrar rápidamente subdominios ocultos o no evidentes de un dominio objetivo a través de la enumeración por fuerza bruta.' },
  { id: 'sublist3r', name: 'Sublist3r', category: ToolCategory.GENERAL_RECON, description: 'Una rápida herramienta de enumeración de subdominios para pentesters. Enumera subdominios utilizando muchos motores de búsqueda como Google, Yahoo, Bing, Baidu y Ask.', command: 'python sublist3r.py -d example.com', useCase: 'Agregar información de subdominios de múltiples motores de búsqueda para obtener una lista más completa que la de una sola fuente.' },
  { id: 'knock-pages', name: 'Knock Pages', category: ToolCategory.GENERAL_RECON, description: 'Una herramienta para encontrar subdominios en un dominio objetivo a través de una lista de palabras.', command: 'knockpy example.com', useCase: 'Realizar enumeración de subdominios para identificar posibles objetivos para un análisis de seguridad más profundo, como servidores de desarrollo olvidados o aplicaciones internas.' },
  // Social Media
  { id: 'twint', name: 'Twint', category: ToolCategory.SOCIAL_MEDIA, description: 'Una avanzada herramienta de scraping de Twitter escrita en Python que permite extraer Tweets de perfiles de Twitter sin usar la API de Twitter.', command: 'twint -u username -s "keyword" --since 2022-01-01', useCase: 'Recolectar todos los tuits de un usuario específico o sobre un tema determinado para análisis de sentimientos, investigación histórica o recopilación de pruebas, eludiendo las limitaciones de la API.' },
  { id: 'instalooter', name: 'InstaLooter', category: ToolCategory.SOCIAL_MEDIA, description: 'Un programa que puede descargar fotos y videos de cualquier perfil de Instagram, junto con sus descripciones y otros metadatos.', command: 'instalooter user username -n 100', useCase: 'Archivar todo el contenido multimedia de un perfil de Instagram para una investigación, incluyendo publicaciones, historias y destacados.' },
  { id: 'socialmapper', name: 'SocialMapper', category: ToolCategory.SOCIAL_MEDIA, description: 'Una herramienta de mapeo de redes sociales que correlaciona perfiles de varios sitios (LinkedIn, Facebook, Instagram, etc.) basándose en reconocimiento facial.', command: 'python social_mapper.py -f imagefolder -i name_list.txt -m fast', useCase: 'Identificar y vincular perfiles de redes sociales de una lista de objetivos en diferentes plataformas, creando una huella digital más completa.' },
  { id: 'tinfoleak', name: 'Tinfoleak', category: ToolCategory.SOCIAL_MEDIA, description: 'Una completa herramienta de análisis de inteligencia de Twitter que proporciona información detallada sobre el perfil de un usuario, sus tuits y su grafo social.', command: 'python tinfoleak.py -u username', useCase: 'Analizar una cuenta de Twitter para determinar su historial de ubicaciones, uso de dispositivos, horas de actividad y conexiones sociales.' },
  { id: 'twitter-exporter', name: 'Twitter Exporter', category: ToolCategory.SOCIAL_MEDIA, description: 'Una utilidad para exportar seguidores de Twitter, seguidos o datos de tuits a un archivo CSV.', useCase: 'Crear un conjunto de datos de la red social de un objetivo para analizarlo en otras herramientas como Maltego o Gephi.' },
  // Metadata & Forensics
  { id: 'exiftool', name: 'ExifTool', category: ToolCategory.METADATA_FORENSICS, description: 'Una potente aplicación de línea de comandos para leer, escribir y editar metainformación en una amplia variedad de archivos.', command: 'exiftool image.jpg', useCase: 'Extraer coordenadas GPS ocultas, modelo de cámara y fecha de creación de una imagen para determinar su origen y contexto.' },
  { id: 'metagoofil', name: 'Metagoofil', category: ToolCategory.METADATA_FORENSICS, description: 'Una herramienta de recopilación de información diseñada para extraer metadatos de documentos públicos (pdf,doc,xls,ppt,etc) disponibles en los sitios web de un objetivo.', command: 'metagoofil -d example.com -t pdf,doc -l 100 -o files', useCase: 'Encontrar nombres de usuario, versiones de software y rutas de red ocultas en documentos del sitio web de una empresa, revelando información interna.' },
  { id: 'stegosuite', name: 'StegoSuite', category: ToolCategory.METADATA_FORENSICS, description: 'Una herramienta gráfica de esteganografía para ocultar información en varios archivos de imagen.', useCase: 'Detectar o incrustar mensajes ocultos en imágenes para comunicación encubierta o análisis forense de medios sospechosos.' },
  { id: 'metadata-anylistion-toolkit', name: 'Metadata Anylisation Toolkit', category: ToolCategory.METADATA_FORENSICS, description: 'Un conjunto de herramientas para analizar y eliminar metadatos de una amplia gama de tipos de archivo para proteger la privacidad.', useCase: 'Analizar un lote de documentos para identificar a todos los autores y fechas de creación, o limpiar los metadatos de los archivos antes de su publicación.' },
  // Data Analysis & Visualization
  { id: 'maltego', name: 'Maltego', category: ToolCategory.DATA_ANALYSIS, description: 'Una herramienta interactiva de minería de datos que renderiza grafos dirigidos para el análisis de enlaces. Permite a los investigadores visualizar relaciones entre entidades.', useCase: 'Mapear gráficamente las conexiones entre una persona de interés, sus asociados, direcciones de correo electrónico conocidas, sitios web que posee y perfiles en redes sociales.' },
  { id: 'libreoffice', name: 'LibreOffice', category: ToolCategory.DATA_ANALYSIS, description: 'Una potente y gratuita suite de ofimática, que incluye aplicaciones de hoja de cálculo (Calc) y base de datos (Base) para el análisis de datos.', useCase: 'Organizar, filtrar y analizar grandes conjuntos de datos recopilados con otras herramientas OSINT, como listas de correos electrónicos o publicaciones de redes sociales extraídas.' },
  { id: 'gimp', name: 'GIMP', category: ToolCategory.DATA_ANALYSIS, description: 'Programa de Manipulación de Imágenes de GNU. Un editor de gráficos rasterizados gratuito y de código abierto utilizado para el retoque y la edición de imágenes.', useCase: 'Analizar y mejorar imágenes para una investigación, como ajustar el brillo para revelar detalles en una foto oscura o examinar capas en busca de manipulación.' },
  { id: 'google-earth-pro', name: 'Google Earth Pro', category: ToolCategory.DATA_ANALYSIS, description: 'Una aplicación de software geoespacial que muestra un globo terráqueo virtual, que se puede utilizar para analizar y capturar datos geográficos.', useCase: 'Realizar inspecciones virtuales de sitios, medir distancias y analizar imágenes de satélite históricas de una ubicación específica para evaluaciones de seguridad física o seguimiento de eventos.' },
  // System & Security
  { id: 'bleachbit', name: 'BleachBit', category: ToolCategory.SYSTEM_SECURITY, description: 'Un potente limpiador de sistema que libera espacio en disco y mantiene la privacidad triturando archivos y limpiando el espacio libre.', command: 'bleachbit --clean system.free_disk_space', useCase: 'Limpiar de forma segura archivos temporales, historial del navegador y cachés de aplicaciones para borrar tus huellas después de una investigación (anti-forense).' },
  { id: 'keepassxc', name: 'KeePassXC', category: ToolCategory.SYSTEM_SECURITY, description: 'Un gestor de contraseñas moderno, seguro y de código abierto.', useCase: 'Almacenar y gestionar de forma segura contraseñas, claves de API y otras credenciales sensibles utilizadas durante las investigaciones.' },
  { id: 'kleopatra', name: 'Kleopatra', category: ToolCategory.SYSTEM_SECURITY, description: 'Un gestor de certificados y una GUI criptográfica universal para GnuPG.', useCase: 'Cifrar y descifrar archivos o correos electrónicos utilizando claves PGP para compartir de forma segura información sensible con colegas o fuentes.' },
  { id: 'veracrypt', name: 'VeraCrypt', category: ToolCategory.SYSTEM_SECURITY, description: 'Una utilidad de software libre disponible para el cifrado sobre la marcha (OTFE). Puede crear un disco virtual cifrado dentro de un archivo.', useCase: 'Crear un contenedor seguro y cifrado para almacenar todos los archivos, notas y pruebas relacionadas con un caso específico, garantizando la confidencialidad de los datos.' },
  { id: 'yubico-utilities', name: 'Yubico Utilities', category: ToolCategory.SYSTEM_SECURITY, description: 'Un conjunto de herramientas para configurar las llaves de seguridad de hardware YubiKey.', useCase: 'Gestionar la configuración de autenticación de múltiples factores en una YubiKey para asegurar el acceso a cuentas y servicios en línea críticos.' },
  // Video Manipulation
  { id: 'custom-video-manipulation-utilities', name: 'Utilidades de Vídeo Personalizadas', category: ToolCategory.VIDEO_MANIPULATION, description: 'Una colección de herramientas de línea de comandos (como FFmpeg) para la conversión, edición y extracción de metadatos de vídeo.', command: 'ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 -c copy output.mp4', useCase: 'Recortar un vídeo a un clip de interés específico, convertir formatos o extraer audio y fotogramas individuales para un análisis detallado.' },
  { id: 'custom-video-download-utility', name: 'Utilidad de Descarga de Vídeo Personalizada', category: ToolCategory.VIDEO_MANIPULATION, description: 'Un script personalizado basado en youtube-dl/yt-dlp para descargar vídeos de cientos de sitios web.', command: 'yt-dlp "video_url"', useCase: 'Archivar un vídeo de una red social o un sitio de alojamiento de vídeos como prueba antes de que pueda ser eliminado.' },
  { id: 'vlc', name: 'VLC', category: ToolCategory.VIDEO_MANIPULATION, description: 'Un reproductor multimedia y servidor de streaming libre, de código abierto, portátil y multiplataforma.', useCase: 'Reproducir una amplia variedad de formatos de vídeo y audio, con funciones avanzadas como el análisis fotograma a fotograma y el control de velocidad para una revisión detallada del metraje.' },
  { id: 'mediainfo', name: 'MediaInfo', category: ToolCategory.VIDEO_MANIPULATION, description: 'Una práctica visualización unificada de los datos técnicos y de etiquetas más relevantes para archivos de vídeo y audio.', command: 'mediainfo video.mp4', useCase: 'Analizar un archivo de vídeo para determinar su verdadero códec, tasa de bits, fecha de creación y otros detalles técnicos para verificar su autenticidad.' },
  // Web Cloning
  { id: 'httrack-cloner', name: 'HTTrack Cloner', category: ToolCategory.WEB_CLONING, description: 'Una utilidad de navegador sin conexión fácil de usar. Te permite descargar un sitio web de Internet a un directorio local.', command: 'httrack "http://www.example.com/" -O "/local/path"', useCase: 'Crear una copia completa y sin conexión de un sitio web para un análisis detallado, preservación de pruebas o para estudiar su estructura y scripts sin acceder repetidamente al servidor en vivo.' },
  { id: 'eyewitness', name: 'EyeWitness', category: ToolCategory.WEB_CLONING, description: 'Una herramienta diseñada para tomar capturas de pantalla de sitios web, proporcionar información de cabeceras del servidor e identificar credenciales por defecto si se conocen.', command: 'eyewitness -f urls.txt --web', useCase: 'Recopilar rápidamente inteligencia visual de una lista de URLs tomando capturas de pantalla, lo cual es útil para identificar aplicaciones web interesantes en un amplio rango de IPs.' },
  // Specialized Utilities
  { id: 'emailharvester', name: 'EmailHarvester', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una herramienta para encontrar direcciones de correo electrónico de un dominio específico utilizando varios motores de búsqueda.', command: 'emailharvester -d example.com', useCase: 'Automatizar el descubrimiento de direcciones de correo electrónico disponibles públicamente asociadas a una organización objetivo.' },
  { id: 'ghiro', name: 'Ghiro', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una herramienta de análisis forense de imágenes digitales. Es una plataforma forense multiusuario, multicaso y multievidencia.', useCase: 'Realizar un análisis forense profundo en un gran número de imágenes, extrayendo automáticamente metadatos e identificando posible esteganografía o manipulaciones.' },
  { id: 'linkedint', name: 'LinkedInt', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una herramienta de reconocimiento de LinkedIn para extraer información de empleados y empresas.', useCase: 'Recopilar una lista de todos los empleados de una empresa objetivo desde LinkedIn para identificar personal clave o construir un perfil de la organización.' },
  { id: 'phoneinfoga', name: 'PhoneInfoga', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una de las herramientas más avanzadas para escanear números de teléfono internacionales. Permite recopilar información básica como país, área, operador y tipo de línea.', command: 'phoneinfoga scan -n "+15551234567"', useCase: 'Recopilar inteligencia sobre un número de teléfono para determinar su validez, operador y posible conexión con cuentas en línea antes de hacer contacto o investigar más a fondo.' },
  { id: 'photon', name: 'Photon', category: ToolCategory.SPECIALIZED_UTILS, description: 'Un rastreador increíblemente rápido diseñado para OSINT. Puede extraer URLs, correos electrónicos, archivos, cuentas de sitios web y más.', command: 'photon -u "http://example.com" -l 3 -t 10', useCase: 'Rastrear rápidamente un sitio web para mapear su estructura y extraer todos los documentos enlazados, correos electrónicos y otros puntos de datos.' },
  { id: 'recondog', name: 'ReconDog', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una herramienta todo en uno para todas las necesidades básicas de recopilación de información. Utiliza APIs para obtener información.', command: 'python recondog.py', useCase: 'Usar una interfaz simple y basada en menús para realizar rápidamente tareas comunes de reconocimiento como búsquedas de DNS, escaneos de puertos y consultas WHOIS.' },
  // FIX: Corrected typo in object key from `idá` to `id:`.
  { id: 'skiptracer', name: 'SkipTracer', category: ToolCategory.SPECIALIZED_UTILS, description: 'Un framework de scraping OSINT para investigadores, periodistas e indagadores que aprovecha APIs gratuitas y de pago.', useCase: 'Agregar datos sobre una persona de interés de varios brokers de datos de pago y fuentes públicas para construir un perfil detallado.' },
  { id: 'spiderfoot', name: 'Spiderfoot', category: ToolCategory.SPECIALIZED_UTILS, description: 'Una herramienta de automatización de inteligencia de fuentes abiertas (OSINT). Se integra con un gran número de fuentes de datos para automatizar el proceso de recopilación de información.', command: 'spiderfoot -s example.com', useCase: 'Automatizar todo el proceso de reconocimiento para un objetivo (dominio, IP, nombre de usuario), ejecutando cientos de módulos para recolectar una cantidad masiva de datos para su análisis.' },
];