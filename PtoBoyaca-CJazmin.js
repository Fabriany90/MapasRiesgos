function initMap() {

  const	punto1	={lat:	5.978159	,lng:	-74.594935	};
  const	punto2	={lat:	5.977307	,lng:	-74.583753	};
  const	punto3	={lat:	5.97159	,lng:	-74.571573	};
  const	punto4	={lat:	5.969038	,lng:	-74.566547	};
  const	punto5	={lat:	6.009977	,lng:	-74.558952	};
  const	punto6	={lat:	6.020373	,lng:	-74.560525	};
  const	punto7	={lat:	6.024107	,lng:	-74.55389	};
  const	punto8	={lat:	6.107396	,lng:	-74.554567	};
  const	punto9	={lat:	6.120661	,lng:	-74.555157	};
  const	punto10	={lat:	6.187925	,lng:	-74.56026	};
  const	punto11	={lat:	6.109083	,lng:	-74.577252	};
  const	punto12	={lat:	6.10664	,lng:	-74.576916	};
  const	punto13	={lat:	6.106061	,lng:	-74.586309	};
  const	punto14	={lat:	6.104767	,lng:	-74.585599	};
  const	punto15	={lat:	6.104265	,lng:	-74.58568	};
  const	punto16	={lat:	6.104123	,lng:	-74.586557	};
  const	punto17	={lat:	6.104303	,lng:	-74.584992	};
  const	punto18	={lat:	6.103513	,lng:	-74.586303	};
  const	punto19	={lat:	6.10385	,lng:	-74.585488	};
  const	punto20	={lat:	6.102798	,lng:	-74.585712	};
  const	punto21	={lat:	6.102793	,lng:	-74.586922	};
  const	punto22	={lat:	6.102898	,lng:	-74.586962	};
  const	punto23	={lat:	6.102623	,lng:	-74.586867	};
  const	punto24	={lat:	6.104083	,lng:	-74.585308	};
  const	punto25	={lat:	6.1055	,lng:	-74.586992	};
  const	punto26	={lat:	6.084614	,lng:	-74.578947	};
  const	punto27	={lat:	6.106892	,lng:	-74.587454	};
  const	punto28	={lat:	6.116835	,lng:	-74.581992	};
  const	punto29	={lat:	6.115988	,lng:	-74.579392	};
  const	punto30	={lat:	6.113842	,lng:	-74.580275	};
  const	punto31	={lat:	6.10521	,lng:	-74.585883	};
  const	punto32	={lat:	6.105736	,lng:	-74.5762	};
  const	punto33	={lat:	6.123137	,lng:	-74.573803	};
  


/*---------------Coordenadas---------------------*/
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.0,
    center: punto7,
  });

/*---------------informacion Puntos---------------------*/
const 	info_punto1=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_1.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_2.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_3.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_4.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_5.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_6.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_7.jpg	">'+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_8.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	22,4	</p>"+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_9.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	27,3	</p>"+		
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
 '<img src="PtoBoyacaCJazmin/	riesgo_10.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	32,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto10	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto11=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_11.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	35,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto11	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto12=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_12.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	40,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto12	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto13=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_13.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	40,6	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 1 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto13	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto14=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_14.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	40,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 1 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto14	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto15=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_15.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	41,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 1 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto15	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto16=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_16.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	41,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 1 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto16	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto17=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_17.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	42	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 1 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto17	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto18=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_18.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	43	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto18	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto19=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_19.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	43,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto19	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto20=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_20.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	43,9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto20	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";		
 const 	info_punto21=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_21.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	44,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto21	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto22=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_22.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	44,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto22	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto23=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_23.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	44,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto23	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto24=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_24.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	44,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto24	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto25=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_25.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	47,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Modulo 2 Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto25	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto26=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_26.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	50,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Area Restaurante Campo Jazmin	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto26	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto27=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_27.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	52,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Muelle (Ferry)	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto27	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto28=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_28.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	54,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Oficinas La Loma	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto28	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto29=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_29.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	54,8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Cluster G	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto29	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto30=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_30.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	57,3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Cluster E	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto30	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto31=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_31.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	59,2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Cluster K	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto31	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto32=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_32.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	63,4	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Via a ETR Girasol puente angosto	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto32	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto33=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="PtoBoyacaCJazmin/	riesgo_33.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	64,4	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Cruce a ETR Girasol	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto33	"><li>Más información</li></a>'+		
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
          

   /*---------------eventos click Puntos---------------------*/

   function closeP(){
    p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
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
    p31.close();p32.close();p33.close();
  });
  marker3.addListener("click", () => {
    p3.open({
      anchor: marker3, map,
      shouldFocus: false,
    });
    p1.close();p2.close();/*p3.close();*/p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker4.addListener("click", () => {
    p4.open({
      anchor: marker4, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();/*p4.close();*/p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker5.addListener("click", () => {
    p5.open({
      anchor: marker5, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker6.addListener("click", () => {
    p6.open({
      anchor: marker6, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker7.addListener("click", () => {
    p7.open({
      anchor: marker7, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker8.addListener("click", () => {
    p8.open({
      anchor: marker8, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker9.addListener("click", () => {
    p9.open({
      anchor: marker9, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker10.addListener("click", () => {
    p10.open({
      anchor: marker10, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker11.addListener("click", () => {
    p11.open({
      anchor: marker11, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker12.addListener("click", () => {
    p12.open({
      anchor: marker12, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker13.addListener("click", () => {
    p13.open({
      anchor: marker13, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker14.addListener("click", () => {
    p14.open({
      anchor: marker14, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker15.addListener("click", () => {
    p15.open({
      anchor: marker15, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker16.addListener("click", () => {
    p16.open({
      anchor: marker16, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker17.addListener("click", () => {
    p17.open({
      anchor: marker17, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker18.addListener("click", () => {
    p18.open({
      anchor: marker18, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker19.addListener("click", () => {
    p19.open({
      anchor: marker19, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker20.addListener("click", () => {
    p20.open({
      anchor: marker20, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();p32.close();p33.close();
  });
  marker21.addListener("click", () => {
      p21.open({
        anchor: marker21, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker22.addListener("click", () => {
      p22.open({
        anchor: marker22, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker23.addListener("click", () => {
      p23.open({
        anchor: marker23, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker24.addListener("click", () => {
      p24.open({
        anchor: marker24, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker25.addListener("click", () => {
      p25.open({
        anchor: marker25, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker26.addListener("click", () => {
      p26.open({
        anchor: marker26, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker27.addListener("click", () => {
      p27.open({
        anchor: marker27, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker28.addListener("click", () => {
      p28.open({
        anchor: marker28, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p29.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker29.addListener("click", () => {
      p29.open({
        anchor: marker29, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p30.close();
      p31.close();p32.close();p33.close();
    });
    marker30.addListener("click", () => {
      p30.open({
        anchor: marker30, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();
      p31.close();p32.close();p33.close();
    });
    marker31.addListener("click", () => {
      p31.open({
        anchor: marker31, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p32.close();p33.close();
    });
    marker32.addListener("click", () => {
      p32.open({
        anchor: marker32, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p33.close();
    });
    marker33.addListener("click", () => {
      p33.open({
        anchor: marker33, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();p32.close();
    });

  /*---------------propiedad poligonos---------------------*/

  const flightPlanCoordinates = [
    {lat:	5.978186423	,lng:	-74.595227060	},
{lat:	5.977345980	,lng:	-74.584257978	},
{lat:	5.977319951	,lng:	-74.583516942	},
{lat:	5.975258295	,lng:	-74.583598933	},
{lat:	5.973305480	,lng:	-74.578446334	},
{lat:	5.972368227	,lng:	-74.574960872	},
{lat:	5.971934100	,lng:	-74.573231193	},
{lat:	5.970969130	,lng:	-74.568750296	},
{lat:	5.970539937	,lng:	-74.566466360	},
{lat:	5.970521818	,lng:	-74.566414074	},
{lat:	5.970340068	,lng:	-74.565804383	},
{lat:	5.969955295	,lng:	-74.565764322	},
{lat:	5.969731979	,lng:	-74.566016086	},
{lat:	5.969874849	,lng:	-74.566413817	},
{lat:	5.970189420	,lng:	-74.566493053	},
{lat:	5.971032795	,lng:	-74.566259113	},
{lat:	5.972086216	,lng:	-74.565819347	},
{lat:	5.974080680	,lng:	-74.564339103	},
{lat:	5.976167008	,lng:	-74.562617596	},
{lat:	5.977404897	,lng:	-74.561138501	},
{lat:	5.978314365	,lng:	-74.560424560	},
{lat:	5.979531956	,lng:	-74.559585858	},
{lat:	5.980556570	,lng:	-74.558839300	},
{lat:	5.982900071	,lng:	-74.556236806	},
{lat:	5.984171703	,lng:	-74.554945869	},
{lat:	5.985338972	,lng:	-74.554349298	},
{lat:	5.986370288	,lng:	-74.554111902	},
{lat:	5.987636258	,lng:	-74.553868099	},
{lat:	5.989753070	,lng:	-74.553415395	},
{lat:	5.991406933	,lng:	-74.552800786	},
{lat:	5.992753837	,lng:	-74.552296368	},
{lat:	5.993991445	,lng:	-74.551805706	},
{lat:	5.994764447	,lng:	-74.551615503	},
{lat:	5.995723312	,lng:	-74.551634257	},
{lat:	5.996704988	,lng:	-74.551909293	},
{lat:	5.997631328	,lng:	-74.552481895	},
{lat:	5.998382493	,lng:	-74.553229671	},
{lat:	5.999065350	,lng:	-74.553931487	},
{lat:	5.999675389	,lng:	-74.554399333	},
{lat:	6.001967914	,lng:	-74.555802313	},
{lat:	6.004918455	,lng:	-74.557603636	},
{lat:	6.005869351	,lng:	-74.558105539	},
{lat:	6.006612194	,lng:	-74.558403317	},
{lat:	6.007444349	,lng:	-74.558517662	},
{lat:	6.008453126	,lng:	-74.558504118	},
{lat:	6.009142848	,lng:	-74.558539965	},
{lat:	6.009707846	,lng:	-74.558708774	},
{lat:	6.010185236	,lng:	-74.558877041	},
{lat:	6.012349908	,lng:	-74.559917374	},
{lat:	6.014620691	,lng:	-74.561037012	},
{lat:	6.016260448	,lng:	-74.561792688	},
{lat:	6.017106614	,lng:	-74.562016805	},
{lat:	6.017962569	,lng:	-74.561994227	},
{lat:	6.019316997	,lng:	-74.561546691	},
{lat:	6.020292306	,lng:	-74.560800517	},
{lat:	6.020832580	,lng:	-74.559961296	},
{lat:	6.021334434	,lng:	-74.558883971	},
{lat:	6.022119986	,lng:	-74.557802363	},
{lat:	6.023132824	,lng:	-74.556877027	},
{lat:	6.023842183	,lng:	-74.555976622	},
{lat:	6.024292582	,lng:	-74.554658758	},
{lat:	6.024115748	,lng:	-74.553165070	},
{lat:	6.023219334	,lng:	-74.551687744	},
{lat:	6.022615012	,lng:	-74.550603674	},
{lat:	6.022462628	,lng:	-74.549136317	},
{lat:	6.022824554	,lng:	-74.547920149	},
{lat:	6.023371848	,lng:	-74.547064395	},
{lat:	6.024108077	,lng:	-74.546400687	},
{lat:	6.025898778	,lng:	-74.545580381	},
{lat:	6.030419917	,lng:	-74.543312861	},
{lat:	6.032412837	,lng:	-74.542371058	},
{lat:	6.033368152	,lng:	-74.542141924	},
{lat:	6.034302267	,lng:	-74.542269395	},
{lat:	6.035232705	,lng:	-74.542590058	},
{lat:	6.037072911	,lng:	-74.543925031	},
{lat:	6.041910739	,lng:	-74.546829935	},
{lat:	6.042999435	,lng:	-74.547328711	},
{lat:	6.043852880	,lng:	-74.548036264	},
{lat:	6.044276367	,lng:	-74.548590431	},
{lat:	6.044645080	,lng:	-74.549390847	},
{lat:	6.045334374	,lng:	-74.551589693	},
{lat:	6.046357232	,lng:	-74.554717597	},
{lat:	6.047138921	,lng:	-74.556381620	},
{lat:	6.048363979	,lng:	-74.558234472	},
{lat:	6.049488099	,lng:	-74.559444486	},
{lat:	6.051044625	,lng:	-74.560684490	},
{lat:	6.053096397	,lng:	-74.561368304	},
{lat:	6.054399594	,lng:	-74.561397936	},
{lat:	6.055226150	,lng:	-74.561310548	},
{lat:	6.056852830	,lng:	-74.560792030	},
{lat:	6.059100657	,lng:	-74.559880103	},
{lat:	6.065102566	,lng:	-74.557396528	},
{lat:	6.068447500	,lng:	-74.555927607	},
{lat:	6.069597125	,lng:	-74.555151333	},
{lat:	6.070349852	,lng:	-74.554319870	},
{lat:	6.071555663	,lng:	-74.553150104	},
{lat:	6.072599854	,lng:	-74.552139928	},
{lat:	6.073552902	,lng:	-74.551610817	},
{lat:	6.074487119	,lng:	-74.551482405	},
{lat:	6.075478131	,lng:	-74.551482287	},
{lat:	6.076508881	,lng:	-74.551689835	},
{lat:	6.077682374	,lng:	-74.551880142	},
{lat:	6.079919002	,lng:	-74.552123308	},
{lat:	6.084419041	,lng:	-74.552491768	},
{lat:	6.088251654	,lng:	-74.552758600	},
{lat:	6.093194254	,lng:	-74.553077546	},
{lat:	6.100937088	,lng:	-74.553727347	},
{lat:	6.108321146	,lng:	-74.554328753	},
{lat:	6.118180718	,lng:	-74.555217673	},
{lat:	6.119413482	,lng:	-74.555330976	},
{lat:	6.119364503	,lng:	-74.555617250	},
{lat:	6.118862764	,lng:	-74.556161545	},
{lat:	6.118460602	,lng:	-74.556569441	},
{lat:	6.118139003	,lng:	-74.556946694	},
{lat:	6.118159087	,lng:	-74.557488295	},
{lat:	6.118371898	,lng:	-74.558109405	},
{lat:	6.118659504	,lng:	-74.558505023	},
{lat:	6.118858580	,lng:	-74.558785476	},
{lat:	6.118951265	,lng:	-74.558934343	},
{lat:	6.119062902	,lng:	-74.559409928	},
{lat:	6.119235120	,lng:	-74.559727512	},
{lat:	6.119689978	,lng:	-74.560004872	},
{lat:	6.120188662	,lng:	-74.560491008	},
{lat:	6.120452963	,lng:	-74.560994829	},
{lat:	6.120721416	,lng:	-74.561607947	},
{lat:	6.120858167	,lng:	-74.562050505	},
{lat:	6.121014061	,lng:	-74.562659246	},
{lat:	6.121054930	,lng:	-74.563403067	},
{lat:	6.121126273	,lng:	-74.563836732	},
{lat:	6.121082390	,lng:	-74.564474519	},
{lat:	6.120919702	,lng:	-74.564881015	},
{lat:	6.120791393	,lng:	-74.565301579	},
{lat:	6.120650367	,lng:	-74.566012923	},
{lat:	6.120673148	,lng:	-74.566647854	},
{lat:	6.120482816	,lng:	-74.567229661	},
{lat:	6.120120376	,lng:	-74.568103957	},

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
