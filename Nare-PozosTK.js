function initMap() {

const	punto1	={lat:	6.0592	,lng:	-74.59789	};
const	punto2	={lat:	6.075588	,lng:	-74.59118	};
const	punto3	={lat:	6.05233	,lng:	-74.595198	};
const	punto4	={lat:	6.075693	,lng:	-74.590868	};
const	punto5	={lat:	6.062976	,lng:	-74.595376	};
const	punto6	={lat:	6.062687	,lng:	-74.595487	};
const	punto7	={lat:	6.062971	,lng:	-74.59541	};
const	punto8	={lat:	6.061398	,lng:	-74.589796	};
const	punto9	={lat:	6.061468	,lng:	-74.589075	};
const	punto10	={lat:	6.063322	,lng:	-74.586705	};
const	punto11	={lat:	6.063795	,lng:	-74.58603	};
const	punto12	={lat:	6.061398	,lng:	-74.587422	};
const	punto13	={lat:	6.058176	,lng:	-74.587724	};
const	punto14	={lat:	6.046548	,lng:	-74.59691	};
const	punto15	={lat:	6.042718	,lng:	-74.599532	};
const	punto16	={lat:	6.046092	,lng:	-74.598398	};
const	punto17	={lat:	6.045767	,lng:	-74.596858	};
const	punto18	={lat:	6.037992	,lng:	-74.595593	};
const	punto19	={lat:	6.033368	,lng:	-74.600227	};
const	punto20	={lat:	6.033536	,lng:	-74.599655	};
const	punto21	={lat:	6.046345	,lng:	-74.592595	};
const	punto22	={lat:	6.047488	,lng:	-74.593082	};
const	punto23	={lat:	6.047925	,lng:	-74.593402	};
const	punto24	={lat:	6.051195	,lng:	-74.592175	};
const	punto25	={lat:	6.049823	,lng:	-74.591355	};
const	punto26	={lat:	6.049902	,lng:	-74.591382	};
const	punto27	={lat:	6.058490	,lng:	-74.597588	};
const	punto28	={lat:	5.973593	,lng:	-74.61881	};
const	punto29	={lat:	5.946725	,lng:	-74.635217	};
const	punto30	={lat:	5.905296	,lng:	-74.642117	};
const	punto31	={lat:	5.899128	,lng:	-74.744606	};


/*---------------Coordenadas---------------------*/
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.0,
    center: punto28,
  });

/*---------------informacion Puntos---------------------*/
const 	info_punto1=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_1.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	0	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Porteria Campo Nare	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto1	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto2=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_2.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	0,5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto2	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto3=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_3.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	1.5	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto3	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto4=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_4.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	2.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto4	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto5=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_5.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	5.9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto5	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto6=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_6.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	9.2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto6	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto7=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_7.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	12.7	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto7	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto8=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_8.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	16.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto8	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto9=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_9.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	21.3	</p>"+		
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
 '<img src="NarePozosTK/	riesgo_10.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	26.1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto10	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto11=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_11.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	30.9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto11	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto12=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_12.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	36.3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto12	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto13=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_13.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	42.3	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto13	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto14=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_14.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	51.9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto14	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto15=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_15.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	62.1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto15	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto16=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_16.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	72.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto16	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto17=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_17.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	83.9	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto17	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto18=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_18.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	96.1	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto18	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto19=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_19.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	109.2	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto19	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
const 	info_punto20=			
'<div id="contenido">' +				
        '<div id="siteImagen">'+				
 '<img src="NarePozosTK/	riesgo_20.jpg	">'+		
        "</div>"+				
        '<div class="siteNotaStar">' +				
            "<h1>Kilómetro:</h1>"+"<p>	124.8	</p>"+		
            "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
            "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
        "</div>"+				
        '<div id="MasInfo">' +				
            '<a href="	#info_punto20	"><li>Más información</li></a>'+		
        "</div>"+				
 "</div> ";				
 const 	info_punto21=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_21.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	140.7	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto21	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto22=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_22.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	158.3	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto22	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto23=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_23.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	176.2	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto23	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto24=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_24.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	194.6	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto24	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto25=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_25.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	213.2	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto25	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto26=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_26.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	232,7	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Campo TK	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto26	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto27=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_27.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	233.8	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Porteria Campo Nare	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto27	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto28=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_28.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	250.4	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Puente en Construccion	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto28	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto29=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_29.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	271.5	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Via en mal estado	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto29	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto30=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_30.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	298.1	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Cacerio Santiago Berrio	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"importante"	><p>	Importante	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto30	"><li>Más información</li></a>'+		
         "</div>"+				
  "</div> ";				
 const 	info_punto31=			
 '<div id="contenido">' +				
         '<div id="siteImagen">'+				
  '<img src="NarePozosTK/	riesgo_31.jpg	">'+		
         "</div>"+				
         '<div class="siteNotaStar">' +				
             "<h1>Kilómetro:</h1>"+"<p>	336.1	</p>"+		
             "<h1>Ubicación:</h1>"+"<p>	Estacion de Servicio Terpel Doradal	</p>"+		
             "<h1>Valoración:</h1>"+'<div id=	"critico"	><p>	Critico	</p></div>'+
         "</div>"+				
         '<div id="MasInfo">' +				
             '<a href="	#info_punto31	"><li>Más información</li></a>'+		
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

  /*---------------eventos etiqueta Puntos---------------------*/
  const moderado = "marcadores/Puntobajo.png";
  const importante = "marcadores/Puntomedio.png";
  const critico = "marcadores/Puntoalto.png";
  const inicio = "marcadores/Inicio.png";
  const inicioimportante = "marcadores/InicioImportante.png";

  const marker1 = 	new google.maps.Marker({
    position:	 punto1, map,
    icon: 	inicioimportante
    });	
    const marker2 = 	new google.maps.Marker({
    position:	 punto2, map,
    icon: 	importante
    });	
    const marker3 = 	new google.maps.Marker({
    position:	 punto3, map,
    icon: 	importante
    });	
    const marker4 = 	new google.maps.Marker({
    position:	 punto4, map,
    icon: 	importante
    });	
    const marker5 = 	new google.maps.Marker({
    position:	 punto5, map,
    icon: 	importante
    });	
    const marker6 = 	new google.maps.Marker({
    position:	 punto6, map,
    icon: 	importante
    });	
    const marker7 = 	new google.maps.Marker({
    position:	 punto7, map,
    icon: 	importante
    });	
    const marker8 = 	new google.maps.Marker({
    position:	 punto8, map,
    icon: 	importante
    });	
    const marker9 = 	new google.maps.Marker({
    position:	 punto9, map,
    icon: 	importante
    });	
    const marker10 = 	new google.maps.Marker({
    position:	 punto10, map,
    icon: 	importante
    });	
    const marker11 = 	new google.maps.Marker({
    position:	 punto11, map,
    icon: 	importante
    });	
    const marker12 = 	new google.maps.Marker({
    position:	 punto12, map,
    icon: 	importante
    });	
    const marker13 = 	new google.maps.Marker({
    position:	 punto13, map,
    icon: 	importante
    });	
    const marker14 = 	new google.maps.Marker({
    position:	 punto14, map,
    icon: 	importante
    });	
    const marker15 = 	new google.maps.Marker({
    position:	 punto15, map,
    icon: 	importante
    });	
    const marker16 = 	new google.maps.Marker({
    position:	 punto16, map,
    icon: 	importante
    });	
    const marker17 = 	new google.maps.Marker({
    position:	 punto17, map,
    icon: 	importante
    });	
    const marker18 = 	new google.maps.Marker({
    position:	 punto18, map,
    icon: 	importante
    });	
    const marker19 = 	new google.maps.Marker({
    position:	 punto19, map,
    icon: 	importante
    });	
    const marker20 = 	new google.maps.Marker({
    position:	 punto20, map,
    icon: 	importante
    });
    const marker21 = 	new google.maps.Marker({
      position:	 punto21, map,
      icon: 	importante
      });	
      const marker22 = 	new google.maps.Marker({
      position:	 punto22, map,
      icon: 	importante
      });	
      const marker23 = 	new google.maps.Marker({
      position:	 punto23, map,
      icon: 	importante
      });	
      const marker24 = 	new google.maps.Marker({
      position:	 punto24, map,
      icon: 	importante
      });	
      const marker25 = 	new google.maps.Marker({
      position:	 punto25, map,
      icon: 	importante
      });	
      const marker26 = 	new google.maps.Marker({
      position:	 punto26, map,
      icon: 	importante
      });	
      const marker27 = 	new google.maps.Marker({
      position:	 punto27, map,
      icon: 	importante
      });	
      const marker28 = 	new google.maps.Marker({
      position:	 punto28, map,
      icon: 	importante
      });	
      const marker29 = 	new google.maps.Marker({
      position:	 punto29, map,
      icon: 	importante
      });	
      const marker30 = 	new google.maps.Marker({
      position:	 punto30, map,
      icon: 	importante
      });	
      const marker31 = 	new google.maps.Marker({
      position:	 punto31, map,
      icon: 	critico
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
    p31.close();
  });
  marker3.addListener("click", () => {
    p3.open({
      anchor: marker3, map,
      shouldFocus: false,
    });
    p1.close();p2.close();/*p3.close();*/p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker4.addListener("click", () => {
    p4.open({
      anchor: marker4, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();/*p4.close();*/p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker5.addListener("click", () => {
    p5.open({
      anchor: marker5, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker6.addListener("click", () => {
    p6.open({
      anchor: marker6, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker7.addListener("click", () => {
    p7.open({
      anchor: marker7, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker8.addListener("click", () => {
    p8.open({
      anchor: marker8, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker9.addListener("click", () => {
    p9.open({
      anchor: marker9, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker10.addListener("click", () => {
    p10.open({
      anchor: marker10, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker11.addListener("click", () => {
    p11.open({
      anchor: marker11, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker12.addListener("click", () => {
    p12.open({
      anchor: marker12, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker13.addListener("click", () => {
    p13.open({
      anchor: marker13, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker14.addListener("click", () => {
    p14.open({
      anchor: marker14, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p15.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker15.addListener("click", () => {
    p15.open({
      anchor: marker15, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p16.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker16.addListener("click", () => {
    p16.open({
      anchor: marker16, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p17.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker17.addListener("click", () => {
    p17.open({
      anchor: marker17, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p18.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker18.addListener("click", () => {
    p18.open({
      anchor: marker18, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p19.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker19.addListener("click", () => {
    p19.open({
      anchor: marker19, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p20.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker20.addListener("click", () => {
    p20.open({
      anchor: marker20, map,
      shouldFocus: false,
    });
    p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
    p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();
    p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    p31.close();
  });
  marker21.addListener("click", () => {
      p21.open({
        anchor: marker21, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker22.addListener("click", () => {
      p22.open({
        anchor: marker22, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker23.addListener("click", () => {
      p23.open({
        anchor: marker23, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker24.addListener("click", () => {
      p24.open({
        anchor: marker24, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker25.addListener("click", () => {
      p25.open({
        anchor: marker25, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p26.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker26.addListener("click", () => {
      p26.open({
        anchor: marker26, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p27.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker27.addListener("click", () => {
      p27.open({
        anchor: marker27, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p28.close();p29.close();p30.close();
      p31.close();
    });
    marker28.addListener("click", () => {
      p28.open({
        anchor: marker28, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p29.close();p30.close();
      p31.close();
    });
    marker29.addListener("click", () => {
      p29.open({
        anchor: marker29, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p30.close();
      p31.close();
    });
    marker30.addListener("click", () => {
      p30.open({
        anchor: marker30, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();
      p31.close();
    });
    marker31.addListener("click", () => {
      p31.open({
        anchor: marker31, map,
        shouldFocus: false,
      });
      p1.close();p2.close();p3.close();p4.close();p5.close();p6.close();p7.close();p8.close();p9.close();p10.close();
      p11.close();p12.close();p13.close();p14.close();p15.close();p16.close();p17.close();p18.close();p19.close();;p20.close();
      p21.close();p22.close();p23.close();p24.close();p25.close();p26.close();p27.close();p28.close();p29.close();p30.close();
    });


  /*---------------propiedad poligonos---------------------*/

  const flightPlanCoordinates = [
    {lat:	5.899086299	,lng:	-74.744682191	},
    {lat:	5.898998730	,lng:	-74.742601506	},
    {lat:	5.898109967	,lng:	-74.739636657	},
    {lat:	5.898144681	,lng:	-74.737411332	},
    {lat:	5.899075165	,lng:	-74.731769038	},
    {lat:	5.899079490	,lng:	-74.729572702	},
    {lat:	5.899859798	,lng:	-74.726063349	},
    {lat:	5.900924384	,lng:	-74.723957312	},
    {lat:	5.901276258	,lng:	-74.723017754	},
    {lat:	5.900994980	,lng:	-74.720486590	},
    {lat:	5.900997546	,lng:	-74.720397618	},
    {lat:	5.901095928	,lng:	-74.716986984	},
    {lat:	5.900868066	,lng:	-74.715674280	},
    {lat:	5.899308843	,lng:	-74.711383993	},
    {lat:	5.899074595	,lng:	-74.710290948	},
    {lat:	5.899711110	,lng:	-74.705619636	},
    {lat:	5.899777750	,lng:	-74.703306396	},
    {lat:	5.899324894	,lng:	-74.699553344	},
    {lat:	5.899173915	,lng:	-74.697619654	},
    {lat:	5.899862122	,lng:	-74.694226273	},
    {lat:	5.899877417	,lng:	-74.691644341	},
    {lat:	5.900115898	,lng:	-74.689514084	},
    {lat:	5.901340711	,lng:	-74.686967167	},
    {lat:	5.902283478	,lng:	-74.684984684	},
    {lat:	5.902203216	,lng:	-74.680589270	},
    {lat:	5.902132480	,lng:	-74.677915829	},
    {lat:	5.902189272	,lng:	-74.676967663	},
    {lat:	5.902690615	,lng:	-74.674934202	},
    {lat:	5.903535219	,lng:	-74.672257712	},
    {lat:	5.904293911	,lng:	-74.667434007	},
    {lat:	5.904206927	,lng:	-74.665324070	},
    {lat:	5.903606324	,lng:	-74.661566720	},
    {lat:	5.902983034	,lng:	-74.657571206	},
    {lat:	5.902335013	,lng:	-74.654435669	},
    {lat:	5.902168460	,lng:	-74.653036729	},
    {lat:	5.902228619	,lng:	-74.651969939	},
    {lat:	5.903888103	,lng:	-74.646616012	},
    {lat:	5.904306616	,lng:	-74.645406876	},
    {lat:	5.904428435	,lng:	-74.642191106	},
    {lat:	5.904390711	,lng:	-74.641447968	},
    {lat:	5.905197988	,lng:	-74.642124384	},
    {lat:	5.905842736	,lng:	-74.642291497	},
    {lat:	5.907055655	,lng:	-74.642207956	},
    {lat:	5.912873878	,lng:	-74.641545612	},
    {lat:	5.915556944	,lng:	-74.640643921	},
    {lat:	5.917304259	,lng:	-74.640457137	},
    {lat:	5.918790349	,lng:	-74.640114359	},
    {lat:	5.919504326	,lng:	-74.639927284	},
    {lat:	5.920802462	,lng:	-74.640146976	},
    {lat:	5.921493718	,lng:	-74.639721787	},
    {lat:	5.922314603	,lng:	-74.639923691	},
    {lat:	5.923285542	,lng:	-74.640040900	},
    {lat:	5.925855447	,lng:	-74.639996710	},
    {lat:	5.926216258	,lng:	-74.639769712	},
    {lat:	5.927345218	,lng:	-74.638496397	},
    {lat:	5.927862711	,lng:	-74.638369753	},
    {lat:	5.929359259	,lng:	-74.639719220	},
    {lat:	5.931133232	,lng:	-74.640661191	},
    {lat:	5.931924633	,lng:	-74.640862257	},
    {lat:	5.934409485	,lng:	-74.640696895	},
    {lat:	5.935292017	,lng:	-74.641345800	},
    {lat:	5.936504646	,lng:	-74.642301196	},
    {lat:	5.937125003	,lng:	-74.642289516	},
    {lat:	5.939251015	,lng:	-74.641252897	},
    {lat:	5.939917045	,lng:	-74.640678539	},
    {lat:	5.941168848	,lng:	-74.640269603	},
    {lat:	5.942410141	,lng:	-74.639745954	},
    {lat:	5.943427605	,lng:	-74.639270839	},
    {lat:	5.944208493	,lng:	-74.637779596	},
    {lat:	5.944496111	,lng:	-74.637016151	},
    {lat:	5.944960368	,lng:	-74.636549627	},
    {lat:	5.947067898	,lng:	-74.635126512	},
    {lat:	5.947642857	,lng:	-74.634638548	},
    {lat:	5.947783820	,lng:	-74.633841155	},
    {lat:	5.948276231	,lng:	-74.633143009	},
    {lat:	5.949256537	,lng:	-74.632933962	},
    {lat:	5.949935891	,lng:	-74.632923979	},
    {lat:	5.950340392	,lng:	-74.633232556	},
    {lat:	5.950822342	,lng:	-74.633929283	},
    {lat:	5.951260600	,lng:	-74.634090420	},
    {lat:	5.952349578	,lng:	-74.634211066	},
    {lat:	5.953095608	,lng:	-74.633935859	},
    {lat:	5.953875948	,lng:	-74.633217984	},
    {lat:	5.954740809	,lng:	-74.632916516	},
    {lat:	5.955822376	,lng:	-74.632265105	},
    {lat:	5.956692338	,lng:	-74.631785677	},
    {lat:	5.957124046	,lng:	-74.631145112	},
    {lat:	5.956884050	,lng:	-74.630247587	},
    {lat:	5.956209208	,lng:	-74.629070298	},
    {lat:	5.955638765	,lng:	-74.628371007	},
    {lat:	5.955809221	,lng:	-74.627574459	},
    {lat:	5.956337074	,lng:	-74.626669535	},
    {lat:	5.956310381	,lng:	-74.625540748	},
    {lat:	5.955873242	,lng:	-74.624311017	},
    {lat:	5.955660197	,lng:	-74.623503366	},
    {lat:	5.955389004	,lng:	-74.622664346	},
    {lat:	5.955594056	,lng:	-74.621690702	},
    {lat:	5.956149704	,lng:	-74.620845948	},
    {lat:	5.956808902	,lng:	-74.620508828	},
    {lat:	5.957302155	,lng:	-74.619780996	},
    {lat:	5.957567060	,lng:	-74.618779382	},
    {lat:	5.957847030	,lng:	-74.618021889	},
    {lat:	5.958366376	,lng:	-74.617413540	},
    {lat:	5.958900773	,lng:	-74.617310278	},
    {lat:	5.959842220	,lng:	-74.617426603	},
    {lat:	5.960821665	,lng:	-74.617247179	},
    {lat:	5.962510814	,lng:	-74.617028949	},
    {lat:	5.963693371	,lng:	-74.616974157	},
    {lat:	5.964403930	,lng:	-74.616905690	},
    {lat:	5.965004325	,lng:	-74.616566051	},
    {lat:	5.965454479	,lng:	-74.616311906	},
    {lat:	5.966337786	,lng:	-74.616396858	},
    {lat:	5.967138540	,lng:	-74.616271615	},
    {lat:	5.967872646	,lng:	-74.616411626	},
    {lat:	5.968385808	,lng:	-74.617049915	},
    {lat:	5.968657871	,lng:	-74.617859351	},
    {lat:	5.969167639	,lng:	-74.618616310	},
    {lat:	5.969546049	,lng:	-74.618805403	},
    {lat:	5.970969728	,lng:	-74.618579476	},
    {lat:	5.971828649	,lng:	-74.618485624	},
    {lat:	5.972761643	,lng:	-74.618898620	},
    {lat:	5.973646680	,lng:	-74.618924287	},
    {lat:	5.974385066	,lng:	-74.618916015	},
    {lat:	5.975574470	,lng:	-74.618623945	},
    {lat:	5.976290155	,lng:	-74.618377511	},
    {lat:	5.976872759	,lng:	-74.617622516	},
    {lat:	5.977261795	,lng:	-74.617250988	},
    {lat:	5.978726873	,lng:	-74.616610585	},
    {lat:	5.980545950	,lng:	-74.615980455	},
    {lat:	5.981260760	,lng:	-74.615763662	},
    {lat:	5.982436545	,lng:	-74.615946181	},
    {lat:	5.983324121	,lng:	-74.615882844	},
    {lat:	5.984612193	,lng:	-74.615237352	},
    {lat:	5.985602712	,lng:	-74.614672302	},
    {lat:	5.986405194	,lng:	-74.614487753	},
    {lat:	5.986966054	,lng:	-74.614579265	},
    {lat:	5.987621019	,lng:	-74.614390408	},
    {lat:	5.988753941	,lng:	-74.614007574	},
    {lat:	5.989595250	,lng:	-74.613497542	},
    {lat:	5.992158643	,lng:	-74.612651464	},
    {lat:	5.993147455	,lng:	-74.612145723	},
    {lat:	5.994255125	,lng:	-74.611613743	},
    {lat:	5.995029799	,lng:	-74.611369000	},
    {lat:	5.996052369	,lng:	-74.610715802	},
    {lat:	5.996642598	,lng:	-74.609693810	},
    {lat:	5.997131596	,lng:	-74.609114214	},
    {lat:	5.997905438	,lng:	-74.608899138	},
    {lat:	5.998440722	,lng:	-74.608766211	},
    {lat:	5.998323923	,lng:	-74.608329633	},
    {lat:	5.998014694	,lng:	-74.607786244	},
    {lat:	5.998218869	,lng:	-74.606842064	},
    {lat:	5.998067333	,lng:	-74.605946979	},
    {lat:	5.996689731	,lng:	-74.603531971	},
    {lat:	5.995886018	,lng:	-74.601697734	},
    {lat:	5.995500186	,lng:	-74.600736564	},
    {lat:	5.995846759	,lng:	-74.599974719	},
    {lat:	5.996239806	,lng:	-74.598620480	},
    {lat:	5.996768464	,lng:	-74.597685792	},
    {lat:	5.997327467	,lng:	-74.596722298	},
    {lat:	5.997574699	,lng:	-74.595304488	},
    {lat:	5.997717307	,lng:	-74.594447701	},
    {lat:	5.997671036	,lng:	-74.594001064	},
    {lat:	5.998261030	,lng:	-74.594018128	},
    {lat:	5.999827913	,lng:	-74.593944702	},
    {lat:	6.002070765	,lng:	-74.593979888	},
    {lat:	6.003131081	,lng:	-74.594069932	},
    {lat:	6.003770371	,lng:	-74.594402392	},
    {lat:	6.004456719	,lng:	-74.595206710	},
    {lat:	6.004966526	,lng:	-74.595963648	},
    {lat:	6.005411787	,lng:	-74.596884273	},
    {lat:	6.006308474	,lng:	-74.597533675	},
    {lat:	6.007328260	,lng:	-74.598008519	},
    {lat:	6.009872952	,lng:	-74.597814992	},
    {lat:	6.012799800	,lng:	-74.597564035	},
    {lat:	6.013808754	,lng:	-74.597385411	},
    {lat:	6.014946740	,lng:	-74.596824563	},
    {lat:	6.016217149	,lng:	-74.595762837	},
    {lat:	6.017365985	,lng:	-74.595855475	},
    {lat:	6.018755084	,lng:	-74.595806628	},
    {lat:	6.019726939	,lng:	-74.595894151	},
    {lat:	6.020232708	,lng:	-74.595760351	},
    {lat:	6.020699459	,lng:	-74.595420031	},
    {lat:	6.021060252	,lng:	-74.595192950	},
    {lat:	6.022008512	,lng:	-74.595071945	},
    {lat:	6.023020016	,lng:	-74.594804322	},
    {lat:	6.023717190	,lng:	-74.594171322	},
    {lat:	6.024260076	,lng:	-74.593771378	},
    {lat:	6.024616631	,lng:	-74.593692630	},
    {lat:	6.025085255	,lng:	-74.593824958	},
    {lat:	6.025789045	,lng:	-74.593993785	},
    {lat:	6.026841844	,lng:	-74.594339910	},
    {lat:	6.028021890	,lng:	-74.594374072	},
    {lat:	6.028761119	,lng:	-74.594336093	},
    {lat:	6.030108180	,lng:	-74.593692188	},
    {lat:	6.031157687	,lng:	-74.593128749	},
    {lat:	6.031783157	,lng:	-74.592939024	},
    {lat:	6.032463421	,lng:	-74.592949553	},
    {lat:	6.033905557	,lng:	-74.593110013	},
    {lat:	6.035682380	,lng:	-74.592923872	},
    {lat:	6.037454958	,lng:	-74.592886079	},
    {lat:	6.038929144	,lng:	-74.592958432	},
    {lat:	6.039777885	,lng:	-74.593220531	},
    {lat:	6.040908928	,lng:	-74.593936192	},
    {lat:	6.042125951	,lng:	-74.594743445	},
    {lat:	6.044105803	,lng:	-74.596184435	},
    {lat:	6.045122208	,lng:	-74.596777998	},
    {lat:	6.046095735	,lng:	-74.596806184	},
    {lat:	6.047483981	,lng:	-74.596787002	},
    {lat:	6.048513984	,lng:	-74.596905912	},
    {lat:	6.049306289	,lng:	-74.597077327	},
    {lat:	6.049801039	,lng:	-74.597329202	},
    {lat:	6.050209829	,lng:	-74.597489511	},
    {lat:	6.051071325	,lng:	-74.597306629	},
    {lat:	6.051594752	,lng:	-74.597232449	},
    {lat:	6.052475524	,lng:	-74.597406395	},
    {lat:	6.053322555	,lng:	-74.597727831	},
    {lat:	6.053847628	,lng:	-74.597950877	},
    {lat:	6.054260638	,lng:	-74.597962832	},
    {lat:	6.054918138	,lng:	-74.597684941	},
    {lat:	6.055684312	,lng:	-74.597736816	},
    {lat:	6.056453881	,lng:	-74.597670022	},
    {lat:	6.057484723	,lng:	-74.597759263	},
    {lat:	6.058555250	,lng:	-74.597493344	},
    {lat:	6.059565932	,lng:	-74.597255388	},
    {lat:	6.060368413	,lng:	-74.597070789	},
    {lat:	6.061223125	,lng:	-74.597125249	},
    {lat:	6.062013757	,lng:	-74.597356016	},
    {lat:	6.062782521	,lng:	-74.597318914	},
    {lat:	6.063382747	,lng:	-74.596979991	},
    {lat:	6.063688477	,lng:	-74.596989417	},
    {lat:	6.064377224	,lng:	-74.597275596	},
    {lat:	6.065355256	,lng:	-74.597874025	},
    {lat:	6.065983878	,lng:	-74.598158956	},
    {lat:	6.066684819	,lng:	-74.598191250	},
    {lat:	6.067114630	,lng:	-74.598061339	},
    {lat:	6.067559044	,lng:	-74.597439676	},
    {lat:	6.068221840	,lng:	-74.596676843	},
    {lat:	6.068310996	,lng:	-74.595802427	},
    {lat:	6.068756930	,lng:	-74.595178271	},
    {lat:	6.069540235	,lng:	-74.594781518	},
    {lat:	6.069993306	,lng:	-74.594714090	},
    {lat:	6.070538530	,lng:	-74.594456866	},
    {lat:	6.071092615	,lng:	-74.593919950	},
    {lat:	6.071093842	,lng:	-74.593876985	},
    {lat:	6.071242155	,lng:	-74.593215973	},
    {lat:	6.071452144	,lng:	-74.592664586	},
    {lat:	6.071675236	,lng:	-74.592414669	},
    {lat:	6.072262691	,lng:	-74.592285660	},
    {lat:	6.072809715	,lng:	-74.592090230	},
    {lat:	6.073423932	,lng:	-74.591853728	},
    {lat:	6.073715293	,lng:	-74.591540452	},
    {lat:	6.073879629	,lng:	-74.591114479	},
    {lat:	6.074213006	,lng:	-74.590866929	},   
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
