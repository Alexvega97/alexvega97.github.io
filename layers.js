var wms_layers = [];


        var lyr_MapabaseOSM_0 = new ol.layer.Tile({
            'title': 'Mapa base OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Callejerogris_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/ign-base",
                              attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo-gris",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Callejero gris',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Callejerogris_1, 0]);
var format_Comunidadesautnomas_2 = new ol.format.GeoJSON();
var features_Comunidadesautnomas_2 = format_Comunidadesautnomas_2.readFeatures(json_Comunidadesautnomas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidadesautnomas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidadesautnomas_2.addFeatures(features_Comunidadesautnomas_2);
var lyr_Comunidadesautnomas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidadesautnomas_2, 
                style: style_Comunidadesautnomas_2,
                popuplayertitle: 'Comunidades autónomas',
                interactive: true,
                title: '<img src="styles/legend/Comunidadesautnomas_2.png" /> Comunidades autónomas'
            });
var format_ParquesNacionales_3 = new ol.format.GeoJSON();
var features_ParquesNacionales_3 = format_ParquesNacionales_3.readFeatures(json_ParquesNacionales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNacionales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNacionales_3.addFeatures(features_ParquesNacionales_3);
var lyr_ParquesNacionales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNacionales_3, 
                style: style_ParquesNacionales_3,
                popuplayertitle: 'Parques Nacionales',
                interactive: true,
                title: '<img src="styles/legend/ParquesNacionales_3.png" /> Parques Nacionales'
            });
var format_Ros_4 = new ol.format.GeoJSON();
var features_Ros_4 = format_Ros_4.readFeatures(json_Ros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_4.addFeatures(features_Ros_4);
var lyr_Ros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_4, 
                style: style_Ros_4,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_4.png" /> Ríos'
            });

lyr_MapabaseOSM_0.setVisible(true);lyr_Callejerogris_1.setVisible(true);lyr_Comunidadesautnomas_2.setVisible(true);lyr_ParquesNacionales_3.setVisible(true);lyr_Ros_4.setVisible(true);
var layersList = [lyr_MapabaseOSM_0,lyr_Callejerogris_1,lyr_Comunidadesautnomas_2,lyr_ParquesNacionales_3,lyr_Ros_4];
lyr_Comunidadesautnomas_2.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'Area': 'Area (hectáreas)', });
lyr_ParquesNacionales_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_Ros_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud (metros)', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_Comunidadesautnomas_2.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', 'Area': 'TextEdit', });
lyr_ParquesNacionales_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', });
lyr_Ros_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Comunidadesautnomas_2.set('fieldLabels', {'ID': 'hidden field', 'TIPO_0101': 'hidden field', 'CODIGO_INE': 'hidden field', 'ETIQUETA': 'inline label - always visible', 'COD_INE': 'hidden field', 'TOT_FOR': 'hidden field', 'ARB': 'hidden field', 'NO_ARB': 'hidden field', 'Area': 'inline label - always visible', });
lyr_ParquesNacionales_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Declaracio': 'hidden field', 'Reclasific': 'hidden field', 'Ampliacion': 'hidden field', 'Fecha de d': 'hidden field', 'Modificaci': 'hidden field', });
lyr_Ros_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Texto': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Categoria': 'hidden field', 'Imagen': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_Ros_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});