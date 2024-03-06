function initMap() {
  const	punto1	={lat:	5.978159	,lng:	-74.594935	};
  const	punto2	={lat:	5.977307	,lng:	-74.583753	};
  const	punto3	={lat:	5.97159	,lng:	-74.571573	};
  const	punto4	={lat:	5.969038	,lng:	-74.566547	};
  const	punto5	={lat:	6.009977	,lng:	-74.558952	};
  const	punto6	={lat:	6.020373	,lng:	-74.560525	};
  const	punto7	={lat:	6.024107	,lng:	-74.55389	};
  const	punto8	={lat:	6.173803	,lng:	-74.568882	};
  const	punto9	={lat:	6.17985	,lng:	-74.564223	};
  const	punto10	={lat:	6.191544	,lng:	-74.559312	};
  const	punto11	={lat:	6.190605	,lng:	-74.55502	};
  const	punto12	={lat:	6.186	,lng:	-74.541	};
  const	punto13	={lat:	6.188	,lng:	-74.535	};
  const	punto14	={lat:	6.186	,lng:	-74.541	};
  const	punto15	={lat:	6.186	,lng:	-74.533	};
  const	punto16	={lat:	6.187	,lng:	-74.535	};
  const	punto17	={lat:	6.186	,lng:	-74.533	};
  const	punto18	={lat:	6.155	,lng:	-74.564	};
  const	punto19	={lat:	6.136	,lng:	-74.562	};
  const	punto20	={lat:	6.202	,lng:	-74.545	};
  const	punto21	={lat:	6.186	,lng:	-74,541 };
  const	punto22	={lat:	6.187657	,lng:	-74.547253};
  const	punto23	={lat:	6.219	,lng:	-74.551	};
  const	punto24	={lat:	6.185	,lng:	-74.533	};
  const	punto25	={lat:	6.155	,lng:	-74.564	};
  const	punto26	={lat:	6.183	,lng:	-74.562	};
  const	punto27	={lat:	6.136	,lng:	-74.562	};
  const	punto28	={lat:	6.186	,lng:	-74.541	};
  const	punto29	={lat:	6.186	,lng:	-74.541	};
  const	punto30	={lat:	6.191544	,lng:	-74.559312	};
  const	punto31	={lat:	6.214	,lng:	-74.552	};
  const	punto32	={lat:	6.214	,lng:	-74.552	};
  const	punto33	={lat:	6.222	,lng:	-74.551	};
  const	punto34	={lat:	6.222905	,lng:	-74.566114	};
  const	punto35	={lat:	6.224714	,lng:	-74.563997	};
  const	punto36	={lat:	6.223746	,lng:	-74.560059	};
  const	punto37	={lat:	6.219897	,lng:	-74.552233	};
  const	punto38	={lat:	6.15452	,lng:	-74.564453	};
  const	punto39	={lat:	6.178688	,lng:	-74.564243	};
  const	punto40	={lat:	5.988779	,lng:	-74.554801	};
  const	punto41	={lat:	5.972726	,lng:	-74.579534	};
  const	punto42	={lat:	5.978287	,lng:	-74.592103	};
  
  
/*---------------Coordenadas---------------------*/
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11.0,
    center: punto11,
  });

/*---------------informacion Puntos---------------------*/
const 	info_punto1=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_1.jpg	">'+		
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
 '<img src="PtoBoyacaCMoriche/	riesgo_2.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	0,2	</p>"+		
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
 '<img src="PtoBoyacaCMoriche/	riesgo_3.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	4,5	</p>"+		
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
 '<img src="PtoBoyacaCMoriche/	riesgo_4.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	5,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto4	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto5=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_5.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	11,6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto5	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto6=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_6.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	12,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto6	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto7=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_7.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	12,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto7	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto8=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_8.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	32,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto8	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto9=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_9.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	33,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto9	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto10=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_10.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	34,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto10	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto11=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_11.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	34,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto11	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto12=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_12.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	38	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto12	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto13=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_13.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	38,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto13	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto14=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_14.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	38,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto14	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto15=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_15.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	38,9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto15	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto16=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_16.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	39	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto16	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto17=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_17.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	39,1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto17	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto18=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_18.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	39,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto18	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto19=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_19.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	40,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto19	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto20=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_20.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	41,7	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto20	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";
 const 	info_punto21=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_21.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	43,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto21	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto22=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_22.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	49,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto22	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto23=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_23.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	50,6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto23	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto24=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_24.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	51,6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto24	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto25=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_25.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	53,9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto25	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto26=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_26.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	61,9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto26	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto27=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_27.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	63,1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto27	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto28=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_28.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	64,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto28	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto29=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_29.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	66,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto29	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto30=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_30.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	66.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Porteria Sur Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto30	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto31=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_31.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	69.6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Inicio doble calzada	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto31	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto32=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_32.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	74	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Retrono hacia el sur	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto32	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto33=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_33.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	79.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Ingreso a la derecha a Puerto Serviez	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto33	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto34=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_34.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	86.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Puerto Serviez	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto34	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto35=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_35.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	94.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Parqueadero Puerto Serviez	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto35	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto36=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_36.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	96.3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Saliendo hacia Porteria Sur Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto36	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto37=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_37.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	101.7	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Km 5,4 Giro a la izquierda	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto37	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto38=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_38.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	102	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Porteria Sur Campo Moriche	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto38	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto39=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCMoriche/	riesgo_39.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	103.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Inicio de doble calzada	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto39	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
 const 	info_punto40=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="PtoBoyacaCMoriche/	riesgo_40.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	129.8	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Km 26,3 via en mal estado	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto40	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto41=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="PtoBoyacaCMoriche/	riesgo_41.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	159.8	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Km 30 via en mal estado	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto41	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto42=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="PtoBoyacaCMoriche/	riesgo_42.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	193.6	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Puerto Boyaca	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto42	"><li>Más información</li></a>'+		
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
  const p17 = new google.maps.InfoWindow({
    content: info_punto17,
  });
  const p18 = new google.maps.InfoWindow({
    content: info_punto18,
  });
  const p19 = new google.maps.InfoWindow({
    content: info_punto19,
  });
  const p20 = new google.maps.InfoWindow({
    content: info_punto20,
  });
  const p21 = new google.maps.InfoWindow({
    content: info_punto21,
  });
  const p22 = new google.maps.InfoWindow({
    content: info_punto22,
  });
  const p23 = new google.maps.InfoWindow({
    content: info_punto23,
  });
  const p24 = new google.maps.InfoWindow({
    content: info_punto24,
  });
  const p25 = new google.maps.InfoWindow({
    content: info_punto25,
  });
  const p26 = new google.maps.InfoWindow({
    content: info_punto26,
  });
  const p27 = new google.maps.InfoWindow({
    content: info_punto27,
  });
  const p28 = new google.maps.InfoWindow({
    content: info_punto28,
  });
  const p29 = new google.maps.InfoWindow({
    content: info_punto29,
  });
  const p30 = new google.maps.InfoWindow({
    content: info_punto30,
  });
  const p31 = new google.maps.InfoWindow({
    content: info_punto31,
  });
  const p32 = new google.maps.InfoWindow({
    content: info_punto32,
  });
  const p33 = new google.maps.InfoWindow({
    content: info_punto33,
  });
  const p34 = new google.maps.InfoWindow({
    content: info_punto34,
  });
  const p35 = new google.maps.InfoWindow({
    content: info_punto35,
  });
  const p36 = new google.maps.InfoWindow({
    content: info_punto36,
  });
  const p37 = new google.maps.InfoWindow({
    content: info_punto37,
  });
  const p38 = new google.maps.InfoWindow({
    content: info_punto38,
  });
  const p39 = new google.maps.InfoWindow({
    content: info_punto39,
  });
  const p40 = new google.maps.InfoWindow({
    content: info_punto40,
  });
  const p41 = new google.maps.InfoWindow({
    content: info_punto41,
  });
  const p42 = new google.maps.InfoWindow({
    content: info_punto42,
  });


  /*---------------eventos etiqueta Puntos---------------------*/
  const moderado = "marcadores/Puntobajo.png";
  const Importante = "marcadores/Puntomedio.png";
  const Critico = "marcadores/Puntoalto.png";
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
    icon: 	Critico
    });	
    const marker6 = 	new google.maps.Marker({
    position:	 punto6, map,
    icon: 	Critico
    });	
    const marker7 = 	new google.maps.Marker({
    position:	 punto7, map,
    icon: 	Critico
    });	
    const marker8 = 	new google.maps.Marker({
    position:	 punto8, map,
    icon: 	Critico
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
    const marker17 = 	new google.maps.Marker({
    position:	 punto17, map,
    icon: 	Importante
    });	
    const marker18 = 	new google.maps.Marker({
    position:	 punto18, map,
    icon: 	Importante
    });	
    const marker19 = 	new google.maps.Marker({
    position:	 punto19, map,
    icon: 	Importante
    });	
    const marker20 = 	new google.maps.Marker({
    position:	 punto20, map,
    icon: 	Importante
    });	
    const marker21 = 	new google.maps.Marker({
      position:	 punto21, map,
      icon: 	Importante
      });	
      const marker22 = 	new google.maps.Marker({
      position:	 punto22, map,
      icon: 	Importante
      });	
      const marker23 = 	new google.maps.Marker({
      position:	 punto23, map,
      icon: 	Importante
      });	
      const marker24 = 	new google.maps.Marker({
      position:	 punto24, map,
      icon: 	Importante
      });	
      const marker25 = 	new google.maps.Marker({
      position:	 punto25, map,
      icon: 	Importante
      });	
      const marker26 = 	new google.maps.Marker({
      position:	 punto26, map,
      icon: 	Importante
      });	
      const marker27 = 	new google.maps.Marker({
      position:	 punto27, map,
      icon: 	Importante
      });	
      const marker28 = 	new google.maps.Marker({
      position:	 punto28, map,
      icon: 	Importante
      });	
      const marker29 = 	new google.maps.Marker({
      position:	 punto29, map,
      icon: 	Importante
      });	
      const marker30 = 	new google.maps.Marker({
      position:	 punto30, map,
      icon: 	Importante
      });	
      const marker31 = 	new google.maps.Marker({
      position:	 punto31, map,
      icon: 	Importante
      });	
      const marker32 = 	new google.maps.Marker({
      position:	 punto32, map,
      icon: 	Importante
      });	
      const marker33 = 	new google.maps.Marker({
      position:	 punto33, map,
      icon: 	Importante
      });	
      const marker34 = 	new google.maps.Marker({
      position:	 punto34, map,
      icon: 	Importante
      });	
      const marker35 = 	new google.maps.Marker({
      position:	 punto35, map,
      icon: 	Importante
      });	
      const marker36 = 	new google.maps.Marker({
      position:	 punto36, map,
      icon: 	Importante
      });	
      const marker37 = 	new google.maps.Marker({
      position:	 punto37, map,
      icon: 	Critico
      });	
      const marker38 = 	new google.maps.Marker({
      position:	 punto38, map,
      icon: 	Importante
      });	
      const marker39 = 	new google.maps.Marker({
      position:	 punto39, map,
      icon: 	Importante
      });	
      const marker40 = 	new google.maps.Marker({
      position:	 punto40, map,
      icon: 	Importante
      });	
      const marker41 = 	new google.maps.Marker({
        position:	 punto41, map,
        icon: 	Importante
        });	
        const marker42 = 	new google.maps.Marker({
        position:	 punto42, map,
        icon: 	Importante
        });	
                    
   /*---------------eventos click Puntos---------------------*/

   function closeP(){
    p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
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
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker3.addListener("click", () => {
    p3.open({
      anchor: marker3, map,
      shouldFocus: false,
    });
    p1.close();p2.close();/*p3.close();*/p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker4.addListener("click", () => {
    p4.open({
      anchor: marker4, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();/*p4.close();*/p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker5.addListener("click", () => {
    p5.open({
      anchor: marker5, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker6.addListener("click", () => {
    p6.open({
      anchor: marker6, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker7.addListener("click", () => {
    p7.open({
      anchor: marker7, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker8.addListener("click", () => {
    p8.open({
      anchor: marker8, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker9.addListener("click", () => {
    p9.open({
      anchor: marker9, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker10.addListener("click", () => {
    p10.open({
      anchor: marker10, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker11.addListener("click", () => {
    p11.open({
      anchor: marker11, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker12.addListener("click", () => {
    p12.open({
      anchor: marker12, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker13.addListener("click", () => {
    p13.open({
      anchor: marker13, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker14.addListener("click", () => {
    p14.open({
      anchor: marker14, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker15.addListener("click", () => {
    p15.open({
      anchor: marker15, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker16.addListener("click", () => {
    p16.open({
      anchor: marker16, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker17.addListener("click", () => {
    p17.open({
      anchor: marker17, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker18.addListener("click", () => {
    p18.open({
      anchor: marker18, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker19.addListener("click", () => {
    p19.open({
      anchor: marker19, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker20.addListener("click", () => {
    p20.open({
      anchor: marker20, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
    p41.close();p42.close();p43.close();
  });
  marker21.addListener("click", () => {
      p21.open({
        anchor: marker21, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker22.addListener("click", () => {
      p22.open({
        anchor: marker22, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker23.addListener("click", () => {
      p23.open({
        anchor: marker23, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker24.addListener("click", () => {
      p24.open({
        anchor: marker24, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker25.addListener("click", () => {
      p25.open({
        anchor: marker25, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker26.addListener("click", () => {
      p26.open({
        anchor: marker26, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker27.addListener("click", () => {
      p27.open({
        anchor: marker27, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker28.addListener("click", () => {
      p28.open({
        anchor: marker28, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker29.addListener("click", () => {
      p29.open({
        anchor: marker29, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker30.addListener("click", () => {
      p30.open({
        anchor: marker30, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker31.addListener("click", () => {
      p31.open({
        anchor: marker31, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker32.addListener("click", () => {
      p32.open({
        anchor: marker32, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker33.addListener("click", () => {
      p33.open({
        anchor: marker33, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker34.addListener("click", () => {
      p34.open({
        anchor: marker34, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker35.addListener("click", () => {
      p35.open({
        anchor: marker35, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker36.addListener("click", () => {
      p36.open({
        anchor: marker36, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker37.addListener("click", () => {
      p37.open({
        anchor: marker37, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p38.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker38.addListener("click", () => {
      p38.open({
        anchor: marker38, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p39.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker39.addListener("click", () => {
      p39.open({
        anchor: marker39, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p40.close();
      p41.close();p42.close();p43.close();
    });
    marker40.addListener("click", () => {
      p40.open({
        anchor: marker40, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();
      p41.close();p42.close();p43.close();
    });
    marker41.addListener("click", () => {
      p41.open({
        anchor: marker41, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p42.close();p43.close();
    });
    marker42.addListener("click", () => {
      p42.open({
        anchor: marker42, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();p34.close();p35.close();p36.close();p37.close();p38.close();p39.close();p40.close();
      p41.close();p43.close();
    });

  /*---------------propiedad poligonos---------------------*/

  const flightPlanCoordinates = [
{lat:	5.978161708	,lng:	-74.594943718	},
{lat:	5.978173848	,lng:	-74.594660805	},
{lat:	5.977255218	,lng:	-74.583515994	},
{lat:	5.975267411	,lng:	-74.583619901	},
{lat:	5.973276427	,lng:	-74.578454528	},
{lat:	5.972332458	,lng:	-74.574766987	},
{lat:	5.972168080	,lng:	-74.574387731	},
{lat:	5.970890102	,lng:	-74.568200038	},
{lat:	5.970739078	,lng:	-74.567277811	},
{lat:	5.970595076	,lng:	-74.566708863	},
{lat:	5.970479830	,lng:	-74.566043515	},
{lat:	5.970212563	,lng:	-74.565767278	},
{lat:	5.969914609	,lng:	-74.565775342	},
{lat:	5.969745996	,lng:	-74.565978218	},
{lat:	5.969787715	,lng:	-74.566237233	},
{lat:	5.969933922	,lng:	-74.566411765	},
{lat:	5.970181301	,lng:	-74.566464568	},
{lat:	5.970730245	,lng:	-74.566340049	},
{lat:	5.971243804	,lng:	-74.566237489	},
{lat:	5.972119705	,lng:	-74.565801981	},
{lat:	5.972839123	,lng:	-74.565286737	},
{lat:	5.975143542	,lng:	-74.563496333	},
{lat:	5.976906503	,lng:	-74.561704658	},
{lat:	5.977737370	,lng:	-74.560815694	},
{lat:	5.979623224	,lng:	-74.559556626	},
{lat:	5.980646351	,lng:	-74.558675827	},
{lat:	5.982279897	,lng:	-74.556895299	},
{lat:	5.983387285	,lng:	-74.555706788	},
{lat:	5.984004084	,lng:	-74.555088124	},
{lat:	5.984371353	,lng:	-74.554811039	},
{lat:	5.985231954	,lng:	-74.554414444	},
{lat:	5.986072149	,lng:	-74.554207376	},
{lat:	5.987116044	,lng:	-74.553981958	},
{lat:	5.988825557	,lng:	-74.553562090	},
{lat:	5.989960586	,lng:	-74.553309641	},
{lat:	5.991304550	,lng:	-74.552888177	},
{lat:	5.992507185	,lng:	-74.552348038	},
{lat:	5.993662540	,lng:	-74.551906040	},
{lat:	5.994319288	,lng:	-74.551734240	},
{lat:	5.995034928	,lng:	-74.551594681	},
{lat:	5.995578702	,lng:	-74.551620788	},
{lat:	5.996102948	,lng:	-74.551695782	},
{lat:	5.996840050	,lng:	-74.552004947	},
{lat:	5.997413803	,lng:	-74.552366406	},
{lat:	5.997955530	,lng:	-74.552787114	},
{lat:	5.998552646	,lng:	-74.553409466	},
{lat:	5.999181869	,lng:	-74.553972635	},
{lat:	6.000452516	,lng:	-74.554816233	},
{lat:	6.001939417	,lng:	-74.555823797	},
{lat:	6.004776300	,lng:	-74.557483661	},
{lat:	6.006016613	,lng:	-74.558198344	},
{lat:	6.006519931	,lng:	-74.558397194	},
{lat:	6.007267436	,lng:	-74.558611632	},
{lat:	6.008455548	,lng:	-74.558571413	},
{lat:	6.009088577	,lng:	-74.558551941	},
{lat:	6.009812314	,lng:	-74.558712053	},
{lat:	6.010320463	,lng:	-74.558966696	},
{lat:	6.011410909	,lng:	-74.559469338	},
{lat:	6.013343191	,lng:	-74.560397487	},
{lat:	6.014904585	,lng:	-74.561158071	},
{lat:	6.016444300	,lng:	-74.561883158	},
{lat:	6.017543584	,lng:	-74.562065835	},
{lat:	6.018188563	,lng:	-74.561970189	},
{lat:	6.018970068	,lng:	-74.561730795	},
{lat:	6.019664138	,lng:	-74.561349051	},
{lat:	6.020098871	,lng:	-74.560990673	},
{lat:	6.020688256	,lng:	-74.560084856	},
{lat:	6.021339642	,lng:	-74.558805714	},
{lat:	6.021907844	,lng:	-74.558059879	},
{lat:	6.022514476	,lng:	-74.557535903	},
{lat:	6.023025157	,lng:	-74.556983050	},
{lat:	6.023620087	,lng:	-74.556328780	},
{lat:	6.024024806	,lng:	-74.555635373	},
{lat:	6.024313611	,lng:	-74.554689706	},
{lat:	6.024136575	,lng:	-74.553335733	},
{lat:	6.023629417	,lng:	-74.552255614	},
{lat:	6.022992727	,lng:	-74.551187299	},
{lat:	6.022467420	,lng:	-74.549902739	},
{lat:	6.022515794	,lng:	-74.548772968	},
{lat:	6.022743825	,lng:	-74.547983452	},
{lat:	6.023128600	,lng:	-74.547349182	},
{lat:	6.023631009	,lng:	-74.546703468	},
{lat:	6.024429341	,lng:	-74.546237512	},
{lat:	6.025901038	,lng:	-74.545579560	},
{lat:	6.026981974	,lng:	-74.545144448	},
{lat:	6.029926557	,lng:	-74.543601271	},
{lat:	6.031693329	,lng:	-74.542691390	},
{lat:	6.032444436	,lng:	-74.542323451	},
{lat:	6.033277644	,lng:	-74.542248365	},
{lat:	6.033814603	,lng:	-74.542199976	},
{lat:	6.034302664	,lng:	-74.542231055	},
{lat:	6.034958814	,lng:	-74.542472183	},
{lat:	6.035285235	,lng:	-74.542574133	},
{lat:	6.035968045	,lng:	-74.543113158	},
{lat:	6.037957015	,lng:	-74.544549877	},
{lat:	6.039220517	,lng:	-74.545318584	},
{lat:	6.040911645	,lng:	-74.546274236	},
{lat:	6.042239569	,lng:	-74.546924675	},
{lat:	6.043032241	,lng:	-74.547435568	},
{lat:	6.043562451	,lng:	-74.547725936	},
{lat:	6.044292631	,lng:	-74.548580705	},
{lat:	6.044696071	,lng:	-74.549540176	},
{lat:	6.045891224	,lng:	-74.553356266	},
{lat:	6.046907165	,lng:	-74.555988368	},
{lat:	6.047817714	,lng:	-74.557614913	},
{lat:	6.048851904	,lng:	-74.558742372	},
{lat:	6.049916636	,lng:	-74.559792136	},
{lat:	6.050764616	,lng:	-74.560504677	},
{lat:	6.051969870	,lng:	-74.561034838	},
{lat:	6.053326961	,lng:	-74.561382303	},
{lat:	6.054678690	,lng:	-74.561443919	},
{lat:	6.055557875	,lng:	-74.561252030	},
{lat:	6.056519686	,lng:	-74.560940004	},
{lat:	6.057419246	,lng:	-74.560558463	},
{lat:	6.059218333	,lng:	-74.559889250	},
{lat:	6.059850019	,lng:	-74.559644539	},
{lat:	6.068713636	,lng:	-74.555691007	},
{lat:	6.069124652	,lng:	-74.555484976	},
{lat:	6.069406010	,lng:	-74.555290629	},
{lat:	6.069732934	,lng:	-74.554979516	},
{lat:	6.071422320	,lng:	-74.553300218	},
{lat:	6.072386411	,lng:	-74.552387097	},
{lat:	6.072893595	,lng:	-74.552003407	},
{lat:	6.073232187	,lng:	-74.551822685	},
{lat:	6.073932868	,lng:	-74.551515460	},
{lat:	6.074581090	,lng:	-74.551457057	},
{lat:	6.075065959	,lng:	-74.551450924	},
{lat:	6.075576016	,lng:	-74.551517630	},
{lat:	6.077315399	,lng:	-74.551792478	},
{lat:	6.078093006	,lng:	-74.551928961	},
{lat:	6.078889154	,lng:	-74.552063779	},
{lat:	6.079980001	,lng:	-74.552153273	},
{lat:	6.089328962	,lng:	-74.552907206	},
{lat:	6.097546055	,lng:	-74.553481681	},
{lat:	6.105759487	,lng:	-74.554084917	},
{lat:	6.107079510	,lng:	-74.554229002	},
{lat:	6.108744708	,lng:	-74.554473525	},
{lat:	6.109962227	,lng:	-74.554514156	},
{lat:	6.113206394	,lng:	-74.554729067	},
{lat:	6.116234103	,lng:	-74.554963642	},
{lat:	6.118760160	,lng:	-74.555224698	},
{lat:	6.121539987	,lng:	-74.555402044	},
{lat:	6.122129374	,lng:	-74.555311378	},
{lat:	6.131814529	,lng:	-74.553518445	},
{lat:	6.133229042	,lng:	-74.553259538	},
{lat:	6.133873975	,lng:	-74.553163871	},
{lat:	6.134321841	,lng:	-74.553161080	},
{lat:	6.135248751	,lng:	-74.553284089	},
{lat:	6.135792219	,lng:	-74.553516823	},
{lat:	6.141999679	,lng:	-74.556958824	},
{lat:	6.143831335	,lng:	-74.557900232	},
{lat:	6.144581516	,lng:	-74.558358317	},
{lat:	6.145090995	,lng:	-74.558838123	},
{lat:	6.145452348	,lng:	-74.559331306	},
{lat:	6.145899205	,lng:	-74.560154831	},
{lat:	6.146525878	,lng:	-74.561319087	},
{lat:	6.149865250	,lng:	-74.567966540	},
{lat:	6.150538944	,lng:	-74.569239470	},
{lat:	6.151085190	,lng:	-74.570129562	},
{lat:	6.151451681	,lng:	-74.570678969	},
{lat:	6.152057371	,lng:	-74.571188088	},
{lat:	6.154314043	,lng:	-74.573045490	},
{lat:	6.154916412	,lng:	-74.573310515	},
{lat:	6.155441395	,lng:	-74.573544959	},
{lat:	6.156106271	,lng:	-74.573672898	},
{lat:	6.156919343	,lng:	-74.573787495	},
{lat:	6.157715811	,lng:	-74.573715758	},
{lat:	6.158234444	,lng:	-74.573669047	},
{lat:	6.158778480	,lng:	-74.573488564	},
{lat:	6.167405772	,lng:	-74.570529832	},
{lat:	6.170899440	,lng:	-74.569339839	},
{lat:	6.171822569	,lng:	-74.569012455	},
{lat:	6.172676814	,lng:	-74.568541002	},
{lat:	6.174140563	,lng:	-74.567827764	},
{lat:	6.177866643	,lng:	-74.565690196	},
{lat:	6.181142668	,lng:	-74.563728885	},
{lat:	6.184675286	,lng:	-74.561663025	},
{lat:	6.186399565	,lng:	-74.560819857	},
{lat:	6.187470897	,lng:	-74.560306461	},
{lat:	6.188228636	,lng:	-74.559771206	},
{lat:	6.189113085	,lng:	-74.559516191	},
{lat:	6.192144369	,lng:	-74.559372697	},
{lat:	6.194397384	,lng:	-74.559326157	},
{lat:	6.198588045	,lng:	-74.558696872	},
{lat:	6.199718084	,lng:	-74.558450975	},
{lat:	6.202407234	,lng:	-74.557968999	},
{lat:	6.206236425	,lng:	-74.557481648	},
{lat:	6.209746433	,lng:	-74.556604474	},
{lat:	6.214969591	,lng:	-74.555071597	},
{lat:	6.216062972	,lng:	-74.554552160	},
{lat:	6.217333508	,lng:	-74.553419636	},
{lat:	6.218836742	,lng:	-74.551958740	},
{lat:	6.219819805	,lng:	-74.551063696	},
{lat:	6.221330826	,lng:	-74.549578286	},
{lat:	6.220817854	,lng:	-74.550872189	},
{lat:	6.220005745	,lng:	-74.553551469	},
{lat:	6.219723766	,lng:	-74.554862306	},
{lat:	6.219742820	,lng:	-74.555354343	},
{lat:	6.220681141	,lng:	-74.557471661	},
{lat:	6.220979425	,lng:	-74.558287836	},
{lat:	6.220969221	,lng:	-74.558733912	},
{lat:	6.220390445	,lng:	-74.560089137	},
{lat:	6.220014926	,lng:	-74.560907098	},
{lat:	6.220023024	,lng:	-74.561276251	},
{lat:	6.224262966	,lng:	-74.563677474	},
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
{lat:	6.191784794	,lng:	-74.559402934	},
{lat:	6.190819219	,lng:	-74.556306709	},
{lat:	6.189915083	,lng:	-74.553034206	},
{lat:	6.188929865	,lng:	-74.549951891	},
{lat:	6.188646524	,lng:	-74.548942931	},
{lat:	6.186293615	,lng:	-74.544838498	},
{lat:	6.184421765	,lng:	-74.541524050	},
{lat:	6.183355755	,lng:	-74.539652391	},
{lat:	6.183000935	,lng:	-74.538951676	},
{lat:	6.182979089	,lng:	-74.538708131	},
{lat:	6.183275258	,lng:	-74.538410436	},
{lat:	6.183659863	,lng:	-74.538174816	},
{lat:	6.184147546	,lng:	-74.538119169	},
{lat:	6.184584391	,lng:	-74.537933135	},
{lat:	6.185211144	,lng:	-74.537908812	},
{lat:	6.185606634	,lng:	-74.537798407	},
{lat:	6.185893392	,lng:	-74.537558486	},
{lat:	6.186116036	,lng:	-74.536951899	},
{lat:	6.186271241	,lng:	-74.536734456	},
{lat:	6.186706333	,lng:	-74.536656430	},
{lat:	6.187086946	,lng:	-74.536693984	},
{lat:	6.187458945	,lng:	-74.536575070	},
{lat:	6.187841998	,lng:	-74.536310008	},
{lat:	6.188140332	,lng:	-74.536083590	},
{lat:	6.188258372	,lng:	-74.535924825	},
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
