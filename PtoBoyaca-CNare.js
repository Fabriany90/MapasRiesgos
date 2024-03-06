function initMap() {

  const	punto1	={lat:	5.978287	,lng:	-74.592103	};
  const	punto2	={lat:	5.979614	,lng:	-74.578644	};
  const	punto3	={lat:	5.979642	,lng:	-74.578766	};
  const	punto4	={lat:	5.989334	,lng:	-74.58824	};
  const	punto5	={lat:	5.989334	,lng:	-74.58824	};
  const	punto6	={lat:	6.024157	,lng:	-74.593704	};
  const	punto7	={lat:	6.040183	,lng:	-74.593403	};
  const	punto8	={lat:	6.04625	,lng:	-74.586814	};
  const	punto9	={lat:	6.075694	,lng:	-74.590896	};
  const	punto10	={lat:	6.075418	,lng:	-74.587965	};
  const	punto11	={lat:	6.075327	,lng:	-74.586025	};
  const	punto12	={lat:	6.087914	,lng:	-74.568114	};
  const	punto13	={lat:	6.074893	,lng:	-74.583666	};
  const	punto14	={lat:	6.076162	,lng:	-74.587177	};
  const	punto15	={lat:	6.081127	,lng:	-74.589123	};
  const	punto16	={lat:	6.076579	,lng:	-74.587541	};
  


/*---------------Coordenadas---------------------*/
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.5,
    center: punto8,
  });

/*---------------informacion Puntos---------------------*/
const 	info_punto1=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_1.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	0	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto1	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto2=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_2.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto2	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto3=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_3.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	3.2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto3	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto4=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_4.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Perales	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto4	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto5=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_5.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	5.3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Perales	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto5	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto6=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_6.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	10.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Perales	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto6	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto7=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_7.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	17.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Perales	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto7	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto8=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_8.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	26.7	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Perales	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto8	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto9=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_9.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	40.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto9	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto10=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_10.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	55.2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Entrada a Campo Nare	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto10	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto11=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_11.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	70.1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Entrada a Campo Nare	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto11	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto12=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_12.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	85.2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Bodega Clariant	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto12	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto13=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_13.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	100.6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	MBT	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto13	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto14=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_14.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	116.6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	MBT	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto14	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto15=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_15.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	132.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	MBT	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto15	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const  info_punto16=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCNare/	riesgo_16.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	149.7	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	MBT	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto16	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				

/*---------------Anlclaje Informacion Puntos---------------------*/
  const p1 = new google.maps.InfoWindow({
    content: info_punto1,
    /*maxwhite: 300,*/
  });
  const p2 = new google.maps.InfoWindow({
    content: info_punto2,
  });
  const p3 = new google.maps.InfoWindow({
    content: info_punto3,
  });
  const p4 = new google.maps.InfoWindow({
    content: info_punto4,
  });
  const p5 = new google.maps.InfoWindow({
    content: info_punto5,
  });
  const p6 = new google.maps.InfoWindow({
    content: info_punto6,
  });
  const p7 = new google.maps.InfoWindow({
    content: info_punto7,
  });
  const p8 = new google.maps.InfoWindow({
    content: info_punto8,
  });
  const p9 = new google.maps.InfoWindow({
    content: info_punto9,
  });
  const p10 = new google.maps.InfoWindow({
    content: info_punto10,
  });
  const p11 = new google.maps.InfoWindow({
    content: info_punto11,
  });
  const p12 = new google.maps.InfoWindow({
    content: info_punto12,
  });
  const p13 = new google.maps.InfoWindow({
    content: info_punto13,
  });
  const p14 = new google.maps.InfoWindow({
    content: info_punto14,
  });
  const p15 = new google.maps.InfoWindow({
    content: info_punto15,
  });
  const p16 = new google.maps.InfoWindow({
    content: info_punto16,
  });

  /*---------------eventos etiqueta Puntos---------------------*/
  const moderado = "marcadores/Puntobajo.png";
  const Importante = "marcadores/Puntomedio.png";
  const critico = "marcadores/Puntoalto.png";
  const inicio = "marcadores/Inicio.png";
  const inicioimportante = "marcadores/InicioImportante.png";

  const marker1 = 	new google.maps.Marker({
    position:	 punto1, map,
    icon: 	inicioimportante
    });	
    const marker2 = 	new google.maps.Marker({
    position:	 punto2, map,
    icon: 	Importante
    });	
    const marker3 = 	new google.maps.Marker({
    position:	 punto3, map,
    icon: 	Importante
    });	
    const marker4 = 	new google.maps.Marker({
    position:	 punto4, map,
    icon: 	Importante
    });	
    const marker5 = 	new google.maps.Marker({
    position:	 punto5, map,
    icon: 	Importante
    });	
    const marker6 = 	new google.maps.Marker({
    position:	 punto6, map,
    icon: 	Importante
    });	
    const marker7 = 	new google.maps.Marker({
    position:	 punto7, map,
    icon: 	Importante
    });	
    const marker8 = 	new google.maps.Marker({
    position:	 punto8, map,
    icon: 	Importante
    });	
    const marker9 = 	new google.maps.Marker({
    position:	 punto9, map,
    icon: 	Importante
    });	
    const marker10 = 	new google.maps.Marker({
    position:	 punto10, map,
    icon: 	Importante
    });	
    const marker11 = 	new google.maps.Marker({
    position:	 punto11, map,
    icon: 	Importante
    });	
    const marker12 = 	new google.maps.Marker({
    position:	 punto12, map,
    icon: 	Importante
    });	
    const marker13 = 	new google.maps.Marker({
    position:	 punto13, map,
    icon: 	Importante
    });	
    const marker14 = 	new google.maps.Marker({
    position:	 punto14, map,
    icon: 	Importante
    });	
    const marker15 = 	new google.maps.Marker({
    position:	 punto15, map,
    icon: 	Importante
    });	
    const marker16 = 	new google.maps.Marker({
    position:	 punto16, map,
    icon: 	Importante
    });	
     
   /*---------------eventos click Puntos---------------------*/

   function closeP(){
    p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  }

  marker1.addListener("click", () => {
    p1.open({
      anchor: marker1, map,
      shouldFocus: false,
    });
    closeP();
      });
  marker2.addListener("click", () => {
    p2.open({
      anchor: marker2, map,
      shouldFocus: false,
    });
    p1.close();/*p2.close();*/p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker3.addListener("click", () => {
    p3.open({
      anchor: marker3, map,
      shouldFocus: false,
    });
    p1.close();p2.close();/*p3.close();*/p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker4.addListener("click", () => {
    p4.open({
      anchor: marker4, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();/*p4.close();*/p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker5.addListener("click", () => {
    p5.open({
      anchor: marker5, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker6.addListener("click", () => {
    p6.open({
      anchor: marker6, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker7.addListener("click", () => {
    p7.open({
      anchor: marker7, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker8.addListener("click", () => {
    p8.open({
      anchor: marker8, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker9.addListener("click", () => {
    p9.open({
      anchor: marker9, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker10.addListener("click", () => {
    p10.open({
      anchor: marker10, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker11.addListener("click", () => {
    p11.open({
      anchor: marker11, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p12.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker12.addListener("click", () => {
    p12.open({
      anchor: marker12, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p13.close();p14.close();p15.close();p16.close();
  });
  marker13.addListener("click", () => {
    p13.open({
      anchor: marker13, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p14.close();p15.close();p16.close();
  });
  marker14.addListener("click", () => {
    p14.open({
      anchor: marker14, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p15.close();p16.close();
  });
  marker15.addListener("click", () => {
    p15.open({
      anchor: marker15, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p16.close();
  });
  marker16.addListener("click", () => {
    p16.open({
      anchor: marker16, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();
  });


  /*---------------propiedad poligonos---------------------*/

  const flightPlanCoordinates = [
    {lat:	5.978010927	,lng:	-74.592425602	},
{lat:	5.977773799	,lng:	-74.589519087	},
{lat:	5.977444602	,lng:	-74.585287339	},
{lat:	5.977258869	,lng:	-74.583508005	},
{lat:	5.977384712	,lng:	-74.583482724	},
{lat:	5.976352756	,lng:	-74.580860958	},
{lat:	5.975914673	,lng:	-74.579699314	},
{lat:	5.975893171	,lng:	-74.579546291	},
{lat:	5.976333166	,lng:	-74.579285064	},
{lat:	5.976837170	,lng:	-74.579058620	},
{lat:	5.977226166	,lng:	-74.578776933	},
{lat:	5.977489769	,lng:	-74.578380934	},
{lat:	5.977944473	,lng:	-74.578125007	},
{lat:	5.978431329	,lng:	-74.578051490	},
{lat:	5.978644376	,lng:	-74.578312915	},
{lat:	5.979062483	,lng:	-74.578793889	},
{lat:	5.979360086	,lng:	-74.579039372	},
{lat:	5.979705258	,lng:	-74.579126203	},
{lat:	5.979986789	,lng:	-74.579067032	},
{lat:	5.984507381	,lng:	-74.583853239	},
{lat:	5.984678247	,lng:	-74.583806769	},
{lat:	5.984786442	,lng:	-74.583931275	},
{lat:	5.984882753	,lng:	-74.584150776	},
{lat:	5.984812010	,lng:	-74.586031039	},
{lat:	5.984779343	,lng:	-74.586730342	},
{lat:	5.984929727	,lng:	-74.587178513	},
{lat:	5.985083668	,lng:	-74.587489305	},
{lat:	5.985342972	,lng:	-74.587510701	},
{lat:	5.985797588	,lng:	-74.587517144	},
{lat:	5.986067572	,lng:	-74.587457016	},
{lat:	5.986208515	,lng:	-74.587545255	},
{lat:	5.986206700	,lng:	-74.587780061	},
{lat:	5.985999414	,lng:	-74.587890119	},
{lat:	5.985817676	,lng:	-74.588017417	},
{lat:	5.985844469	,lng:	-74.588684610	},
{lat:	5.986009007	,lng:	-74.589025233	},
{lat:	5.986310535	,lng:	-74.588885918	},
{lat:	5.986793263	,lng:	-74.588745090	},
{lat:	5.987660614	,lng:	-74.588711151	},
{lat:	5.987996283	,lng:	-74.588660144	},
{lat:	5.988889774	,lng:	-74.588656850	},
{lat:	5.988889562	,lng:	-74.588239985	},
{lat:	5.990390709	,lng:	-74.588293243	},
{lat:	5.991414408	,lng:	-74.588286970	},
{lat:	5.992543421	,lng:	-74.588390249	},
{lat:	5.993151218	,lng:	-74.588430591	},
{lat:	5.993703181	,lng:	-74.588391772	},
{lat:	5.993893561	,lng:	-74.588429413	},
{lat:	5.994029933	,lng:	-74.588546888	},
{lat:	5.994322363	,lng:	-74.588802661	},
{lat:	5.994895260	,lng:	-74.589043849	},
{lat:	5.995538249	,lng:	-74.589183578	},
{lat:	5.995762464	,lng:	-74.589208448	},
{lat:	5.996027264	,lng:	-74.589265601	},
{lat:	5.996086523	,lng:	-74.589512476	},
{lat:	5.996199889	,lng:	-74.589771089	},
{lat:	5.996180726	,lng:	-74.589923786	},
{lat:	5.996129994	,lng:	-74.590054430	},
{lat:	5.996072452	,lng:	-74.590512881	},
{lat:	5.996100259	,lng:	-74.591112499	},
{lat:	5.996238191	,lng:	-74.591590625	},
{lat:	5.996439162	,lng:	-74.591983981	},
{lat:	5.996593005	,lng:	-74.592275940	},
{lat:	5.997597910	,lng:	-74.593950377	},
{lat:	5.997685453	,lng:	-74.594025848	},
{lat:	5.997845650	,lng:	-74.594016498	},
{lat:	5.998156696	,lng:	-74.594013619	},
{lat:	5.998616654	,lng:	-74.593992041	},
{lat:	5.999151046	,lng:	-74.593955589	},
{lat:	5.999594663	,lng:	-74.593973824	},
{lat:	6.002061672	,lng:	-74.593957396	},
{lat:	6.002587570	,lng:	-74.594013658	},
{lat:	6.003071831	,lng:	-74.594080758	},
{lat:	6.003379829	,lng:	-74.594164153	},
{lat:	6.003620475	,lng:	-74.594298755	},
{lat:	6.003854359	,lng:	-74.594494378	},
{lat:	6.004160834	,lng:	-74.594714675	},
{lat:	6.004294936	,lng:	-74.594733512	},
{lat:	6.004377715	,lng:	-74.594822663	},
{lat:	6.004681226	,lng:	-74.595340437	},
{lat:	6.004958646	,lng:	-74.595943396	},
{lat:	6.005501668	,lng:	-74.596798460	},
{lat:	6.006129254	,lng:	-74.597376122	},
{lat:	6.006815026	,lng:	-74.597897259	},
{lat:	6.007221093	,lng:	-74.597997439	},
{lat:	6.007731728	,lng:	-74.597999435	},
{lat:	6.008685859	,lng:	-74.597906103	},
{lat:	6.010192235	,lng:	-74.597833974	},
{lat:	6.011172613	,lng:	-74.597743802	},
{lat:	6.012154165	,lng:	-74.597676907	},
{lat:	6.012792511	,lng:	-74.597591198	},
{lat:	6.013344679	,lng:	-74.597493898	},
{lat:	6.013874420	,lng:	-74.597331115	},
{lat:	6.014293400	,lng:	-74.597176331	},
{lat:	6.014731866	,lng:	-74.596953425	},
{lat:	6.015094972	,lng:	-74.596718029	},
{lat:	6.015471602	,lng:	-74.596386895	},
{lat:	6.015825998	,lng:	-74.596103581	},
{lat:	6.016092254	,lng:	-74.595894615	},
{lat:	6.016287152	,lng:	-74.595833497	},
{lat:	6.016592658	,lng:	-74.595822543	},
{lat:	6.016896144	,lng:	-74.595837600	},
{lat:	6.017174589	,lng:	-74.595860732	},
{lat:	6.017559885	,lng:	-74.595896115	},
{lat:	6.017821822	,lng:	-74.595888472	},
{lat:	6.018199787	,lng:	-74.595870329	},
{lat:	6.018488830	,lng:	-74.595804860	},
{lat:	6.018822433	,lng:	-74.595814983	},
{lat:	6.019074740	,lng:	-74.595849051	},
{lat:	6.019407759	,lng:	-74.595885231	},
{lat:	6.019813776	,lng:	-74.595922412	},
{lat:	6.019981234	,lng:	-74.595944993	},
{lat:	6.020129085	,lng:	-74.595911965	},
{lat:	6.020280357	,lng:	-74.595782111	},
{lat:	6.020575828	,lng:	-74.595517351	},
{lat:	6.020870577	,lng:	-74.595283335	},
{lat:	6.021176857	,lng:	-74.595170938	},
{lat:	6.021531086	,lng:	-74.595099240	},
{lat:	6.021879491	,lng:	-74.595086952	},
{lat:	6.022168408	,lng:	-74.595074847	},
{lat:	6.022533833	,lng:	-74.595020774	},
{lat:	6.022847975	,lng:	-74.594898000	},
{lat:	6.023186075	,lng:	-74.594593967	},
{lat:	6.023646647	,lng:	-74.594173046	},
{lat:	6.023995691	,lng:	-74.593875859	},
{lat:	6.024314036	,lng:	-74.593711090	},
{lat:	6.024545811	,lng:	-74.593638721	},
{lat:	6.024680928	,lng:	-74.593656754	},
{lat:	6.025047356	,lng:	-74.593826792	},
{lat:	6.025365119	,lng:	-74.593903183	},
{lat:	6.025729370	,lng:	-74.594005816	},
{lat:	6.026038248	,lng:	-74.594083641	},
{lat:	6.026604431	,lng:	-74.594336784	},
{lat:	6.028175091	,lng:	-74.594435768	},
{lat:	6.028650411	,lng:	-74.594414424	},
{lat:	6.028997122	,lng:	-74.594295135	},
{lat:	6.030690282	,lng:	-74.593457647	},
{lat:	6.031327886	,lng:	-74.593100716	},
{lat:	6.031589773	,lng:	-74.592970067	},
{lat:	6.031968635	,lng:	-74.592967955	},
{lat:	6.032424758	,lng:	-74.592974337	},
{lat:	6.032950004	,lng:	-74.593052431	},
{lat:	6.033454934	,lng:	-74.593050289	},
{lat:	6.034410072	,lng:	-74.593034605	},
{lat:	6.035322560	,lng:	-74.592969340	},
{lat:	6.036012939	,lng:	-74.592846349	},
{lat:	6.036499033	,lng:	-74.592815675	},
{lat:	6.037494921	,lng:	-74.592851343	},
{lat:	6.038191817	,lng:	-74.592907887	},
{lat:	6.038963043	,lng:	-74.592974507	},
{lat:	6.039512640	,lng:	-74.593075139	},
{lat:	6.039864573	,lng:	-74.593253458	},
{lat:	6.040441437	,lng:	-74.593603987	},
{lat:	6.041752424	,lng:	-74.594586132	},
{lat:	6.044330476	,lng:	-74.596383634	},
{lat:	6.045195564	,lng:	-74.596980726	},
{lat:	6.045430328	,lng:	-74.597201809	},
{lat:	6.045784418	,lng:	-74.597605142	},
{lat:	6.046050978	,lng:	-74.597788620	},
{lat:	6.046106907	,lng:	-74.597752163	},
{lat:	6.046468507	,lng:	-74.597200978	},
{lat:	6.046308095	,lng:	-74.596558145	},
{lat:	6.046378991	,lng:	-74.595719459	},
{lat:	6.046530602	,lng:	-74.594647396	},
{lat:	6.046405891	,lng:	-74.594005991	},
{lat:	6.046273488	,lng:	-74.593300596	},
{lat:	6.046588450	,lng:	-74.592958567	},
{lat:	6.046598649	,lng:	-74.592877260	},
{lat:	6.046696559	,lng:	-74.592096716	},
{lat:	6.046704718	,lng:	-74.592031671	},
{lat:	6.046737355	,lng:	-74.591771490	},
{lat:	6.046783098	,lng:	-74.591679147	},
{lat:	6.046930040	,lng:	-74.590507759	},
{lat:	6.047197070	,lng:	-74.589334317	},
{lat:	6.047118790	,lng:	-74.588187063	},
{lat:	6.046764454	,lng:	-74.587235184	},
{lat:	6.046704124	,lng:	-74.587180858	},
{lat:	6.046057525	,lng:	-74.586124263	},
{lat:	6.045926601	,lng:	-74.585345272	},
{lat:	6.045926462	,lng:	-74.584052120	},
{lat:	6.045998843	,lng:	-74.582830408	},
{lat:	6.046306183	,lng:	-74.581930787	},
{lat:	6.046588490	,lng:	-74.581630968	},
{lat:	6.047005506	,lng:	-74.581457447	},
{lat:	6.047541530	,lng:	-74.581443545	},
{lat:	6.048216080	,lng:	-74.581499493	},
{lat:	6.050024648	,lng:	-74.581685998	},
{lat:	6.050786823	,lng:	-74.581703625	},
{lat:	6.051344484	,lng:	-74.581330394	},
{lat:	6.051866821	,lng:	-74.581395084	},
{lat:	6.051954999	,lng:	-74.581403190	},
{lat:	6.052241814	,lng:	-74.581835322	},
{lat:	6.052538731	,lng:	-74.582068311	},
{lat:	6.053146336	,lng:	-74.581906591	},
{lat:	6.053804256	,lng:	-74.582022632	},
{lat:	6.054514823	,lng:	-74.582127375	},
{lat:	6.055349997	,lng:	-74.582139110	},
{lat:	6.056171497	,lng:	-74.581933569	},
{lat:	6.056484153	,lng:	-74.581855341	},
{lat:	6.056893649	,lng:	-74.581917423	},
{lat:	6.057918832	,lng:	-74.581784448	},
{lat:	6.058647343	,lng:	-74.581714132	},
{lat:	6.059232408	,lng:	-74.581694112	},
{lat:	6.060013572	,lng:	-74.581571741	},
{lat:	6.060759318	,lng:	-74.581547497	},
{lat:	6.061117513	,lng:	-74.581375295	},
{lat:	6.061677636	,lng:	-74.581115266	},
{lat:	6.062429055	,lng:	-74.580976639	},
{lat:	6.063009799	,lng:	-74.581000197	},
{lat:	6.063625032	,lng:	-74.580975428	},
{lat:	6.065038051	,lng:	-74.581119559	},
{lat:	6.065630276	,lng:	-74.581247816	},
{lat:	6.065945424	,lng:	-74.581270045	},
{lat:	6.066382375	,lng:	-74.581307556	},
{lat:	6.066583896	,lng:	-74.581477265	},
{lat:	6.066583803	,lng:	-74.581964344	},
{lat:	6.066550325	,lng:	-74.582555958	},
{lat:	6.066932638	,lng:	-74.582938139	},
{lat:	6.067440448	,lng:	-74.583691857	},
{lat:	6.067972022	,lng:	-74.584163884	},
{lat:	6.068470937	,lng:	-74.584282039	},
{lat:	6.069152133	,lng:	-74.584223544	},
{lat:	6.069747731	,lng:	-74.584053911	},
{lat:	6.070249909	,lng:	-74.583618651	},
{lat:	6.070818734	,lng:	-74.583024957	},
{lat:	6.071252596	,lng:	-74.582628219	},
{lat:	6.071620756	,lng:	-74.582321554	},
{lat:	6.072007999	,lng:	-74.582514366	},
{lat:	6.072122864	,lng:	-74.582848392	},
{lat:	6.072249174	,lng:	-74.583283081	},
{lat:	6.072587253	,lng:	-74.583347247	},
{lat:	6.072903166	,lng:	-74.583320621	},
{lat:	6.073279831	,lng:	-74.583426462	},
{lat:	6.073474929	,lng:	-74.583812724	},
{lat:	6.073726793	,lng:	-74.584212650	},
{lat:	6.074396051	,lng:	-74.584523188	},
{lat:	6.075235753	,lng:	-74.584530876	},
{lat:	6.076134536	,lng:	-74.584546532	},
{lat:	6.076574371	,lng:	-74.584614925	},
{lat:	6.076473947	,lng:	-74.585252435	},
{lat:	6.076455946	,lng:	-74.585559536	},

  ];

  const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 4,
       });

    flightPath.setMap(map);

  const flightPlanCoordinates2 = [
  ];
  const flightPath2 = new google.maps.Polyline({
      path: flightPlanCoordinates2,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 4,
       });

    flightPath2.setMap(map);

}
