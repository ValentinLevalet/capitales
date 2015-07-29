 function Choix(form) {
    i = form.Pays.selectedIndex;
    if (i == 0) {
      for (i=0;i<1;i++) {
        form.Capitale.options[i].text="Choisissez un pays";
        }
      return;
    }
    form.Capitale.selectedIndex = 0;
    switch (i) {
        case 1 : var txt = 'Kaboul'; break;
        case 2 : var txt = 'Pretoria'; break;
        case 3 : var txt = 'Tirana'; break;
        case 4 : var txt = 'Alger'; break;
        case 5 : var txt = 'Berlin'; break;
        case 6 : var txt = 'Andorre-la-Vieille'; break;
        case 7 : var txt = 'Londres'; break;
        case 8 : var txt = 'Luanda'; break;
        case 9 : var txt = 'Riyad'; break;
        case 10 : var txt = 'Buenos Aires'; break;
        case 11 : var txt = 'Erevan'; break;
        case 12 : var txt = 'Saint John\'s'; break;
        case 13 : var txt = 'Canberra'; break;
        case 14 : var txt = 'Vienne'; break;
        case 15 : var txt = 'Bakou'; break;
        case 16 : var txt = 'Nassau'; break;
        case 17 : var txt = 'Manama'; break;
        case 18 : var txt = 'Dacca'; break;
        case 19 : var txt = 'Bridgetown'; break;
        case 20 : var txt = 'Bruxelles'; break;
        case 21 : var txt = 'Belmopan'; break;
        case 22 : var txt = 'Porto-Novo'; break;
        case 23 : var txt = 'Thimbu'; break;
        case 24 : var txt = 'Minsk'; break;
        case 25 : var txt = 'Rangoun'; break;
        case 26 : var txt = 'Sucre'; break;
        case 27 : var txt = 'Sarajevo'; break;
        case 28 : var txt = 'Gaborone'; break;
        case 29 : var txt = 'Brasilia'; break;
        case 30 : var txt = 'Bandar Seri Begawan'; break;
        case 31 : var txt = 'Sofia'; break;
        case 32 : var txt = 'Ouagadougou'; break;
        case 33 : var txt = 'Bujumbura'; break;
        case 34 : var txt = 'Phnom Penh'; break;
        case 35 : var txt = 'Yaoundé'; break;
        case 36 : var txt = 'Ottawa'; break;
        case 37 : var txt = 'Praia'; break;
        case 38 : var txt = 'Santiago'; break;
        case 39 : var txt = 'Pékin'; break;
        case 40 : var txt = 'Nicosie'; break;
        case 41 : var txt = 'Bogota'; break;
        case 42 : var txt = 'Moroni'; break;
        case 43 : var txt = 'Brazzaville'; break;
        case 44 : var txt = 'Pyongyang'; break;
        case 45 : var txt = 'Séoul'; break;
        case 46 : var txt = 'San José'; break;
        case 47 : var txt = 'Yamoussoukro'; break;
        case 48 : var txt = 'Zagreb'; break;
        case 49 : var txt = 'La Havane'; break;
        case 50 : var txt = 'Copenhague'; break;
        case 51 : var txt = 'Djibouti'; break;
        case 52 : var txt = 'Roseau'; break;
        case 53 : var txt = 'Edimbourg'; break;
        case 54 : var txt = 'Le Caire'; break;
        case 55 : var txt = 'Abu Dhabi'; break;
        case 56 : var txt = 'Quito'; break;
        case 57 : var txt = 'Asmara'; break;
        case 58 : var txt = 'Madrid'; break;
        case 59 : var txt = 'Tallinn'; break;
        case 60 : var txt = 'Washington'; break;
        case 61 : var txt = 'Addis-Abeba'; break;
        case 62 : var txt = 'Suva'; break;
        case 63 : var txt = 'Helsinki'; break;
        case 64 : var txt = 'Paris'; break;
        case 65 : var txt = 'Libreville'; break;
        case 66 : var txt = 'Banjul'; break;
        case 67 : var txt = 'Tbilissi'; break;
        case 68 : var txt = 'Accra'; break;
        case 69 : var txt = 'Athènes'; break;
        case 70 : var txt = 'Saint George\'s'; break;
        case 71 : var txt = 'Guatemala'; break;
        case 72 : var txt = 'Conakry'; break;
        case 73 : var txt = 'Malabo'; break;
        case 74 : var txt = 'Bissau'; break;
        case 75 : var txt = 'Georgetown'; break;
        case 76 : var txt = 'Port-au-Prince'; break;
        case 77 : var txt = 'Tegucigalpa'; break;
        case 78 : var txt = 'Budapest'; break;
        case 79 : var txt = 'Port Louis'; break;
        case 80 : var txt = 'New Delhi'; break;
        case 81 : var txt = 'Jakarta'; break;
        case 82 : var txt = 'Bagdad'; break;
        case 83 : var txt = 'Téhéran'; break;
        case 84 : var txt = 'Dublin'; break;
        case 85 : var txt = 'Belfast'; break;
        case 86 : var txt = 'Reykjavik'; break;
        case 87 : var txt = 'Jérusalem'; break;
        case 88 : var txt = 'Rome'; break;
        case 89 : var txt = 'Kingston'; break;
        case 90 : var txt = 'Tokyo'; break;
        case 91 : var txt = 'Amman'; break;
        case 92 : var txt = 'Astana'; break;
        case 93 : var txt = 'Nairobi'; break;
        case 94 : var txt = 'Bichkek'; break;
        case 95 : var txt = 'Tarawa'; break;
        case 96 : var txt = 'Pristina'; break;
        case 97 : var txt = 'Koweït'; break;
        case 98 : var txt = 'Vientiane'; break;
        case 99 : var txt = 'Maseru'; break;
        case 100 : var txt = 'Riga'; break;
        case 101 : var txt = 'Beyrouth'; break;
        case 102 : var txt = 'Monrovia'; break;
        case 103 : var txt = 'Tripoli'; break;
        case 104 : var txt = 'Vaduz'; break;
        case 105 : var txt = 'Vilnius'; break;
        case 106 : var txt = 'Luxembourg'; break;
        case 107 : var txt = 'Skopje'; break;
        case 108 : var txt = 'Antananarivo'; break;
        case 109 : var txt = 'Kuala Lumpur'; break;
        case 110 : var txt = 'Lilongwe'; break;
        case 111 : var txt = 'Malé'; break;
        case 112 : var txt = 'Bamako'; break;
        case 113 : var txt = 'La Valette'; break;
        case 114 : var txt = 'Rabat'; break;
        case 115 : var txt = 'Majuro'; break;
        case 116 : var txt = 'Nouakchott'; break;
        case 117 : var txt = 'Mexico'; break;
        case 118 : var txt = 'Palikir'; break;
        case 119 : var txt = 'Chisinau'; break;
        case 120 : var txt = 'Monaco'; break;
        case 121 : var txt = 'Oulan-Bator'; break;
        case 122 : var txt = 'Podgorica'; break;
        case 123 : var txt = 'Maputo'; break;
        case 124 : var txt = 'Windhoek'; break;
        case 125 : var txt = 'Yaren'; break;
        case 126 : var txt = 'Katmandou'; break;
        case 127 : var txt = 'Managua'; break;
        case 128 : var txt = 'Niamey'; break;
        case 129 : var txt = 'Abuja'; break;
        case 130 : var txt = 'Oslo'; break;
        case 131 : var txt = 'Wellington'; break;
        case 132 : var txt = 'Mascate'; break;
        case 133 : var txt = 'Kampala'; break;
        case 134 : var txt = 'Tachkent'; break;
        case 135 : var txt = 'Islamabad'; break;
        case 136 : var txt = 'Melekeok'; break;
        case 137 : var txt = 'Panama'; break;
        case 138 : var txt = 'Port Moresby'; break;
        case 139 : var txt = 'Asuncion'; break;
        case 140 : var txt = 'Cardiff'; break;
        case 141 : var txt = 'Amsterdam'; break;
        case 142 : var txt = 'Lima'; break;
        case 143 : var txt = 'Manille'; break;
        case 144 : var txt = 'Varsovie'; break;
        case 145 : var txt = 'Lisbonne'; break;
        case 146 : var txt = 'Doha'; break;
        case 147 : var txt = 'Bangui'; break;
        case 148 : var txt = 'Kinshasa'; break;
        case 149 : var txt = 'Saint-Domingue'; break;
        case 150 : var txt = 'Prague'; break;
        case 151 : var txt = 'Bucarest'; break;
        case 152 : var txt = 'Moscou'; break;
        case 153 : var txt = 'Kigali'; break;
        case 154 : var txt = 'Castries'; break;
        case 155 : var txt = 'Basseterre'; break;
        case 156 : var txt = 'Saint-Marin'; break;
        case 157 : var txt = 'Kingstown'; break;
        case 158 : var txt = 'Honiara'; break;
        case 159 : var txt = 'San Salvador'; break;
        case 160 : var txt = 'Apia'; break;
        case 161 : var txt = 'São Tomé'; break;
        case 162 : var txt = 'Dakar'; break;
        case 163 : var txt = 'Belgrade'; break;
        case 164 : var txt = 'Victoria'; break;
        case 165 : var txt = 'Freetown'; break;
        case 166 : var txt = 'Singapour'; break;
        case 167 : var txt = 'Bratislava'; break;
        case 168 : var txt = 'Ljubljana'; break;
        case 169 : var txt = 'Mogadiscio'; break;
        case 170 : var txt = 'Khartoum'; break;
        case 171 : var txt = 'Sri Jayawardenapura'; break;
        case 172 : var txt = 'Stockholm'; break;
        case 173 : var txt = 'Berne'; break;
        case 174 : var txt = 'Paramaribo'; break;
        case 175 : var txt = 'Mbabane'; break;
        case 176 : var txt = 'Damas'; break;
        case 177 : var txt = 'Douchanbe'; break;
        case 178 : var txt = 'Taipei'; break;
        case 179 : var txt = 'Dodoma'; break;
        case 180 : var txt = 'N\'Djamena'; break;
        case 181 : var txt = 'Bangkok'; break;
        case 182 : var txt = 'Dili'; break;
        case 183 : var txt = 'Lomé'; break;
        case 184 : var txt = 'Nukualofa'; break;
        case 185 : var txt = 'Port of Spain'; break;
        case 186 : var txt = 'Tunis'; break;
        case 187 : var txt = 'Achgabat'; break;
        case 188 : var txt = 'Ankara'; break;
        case 189 : var txt = 'Fanafuti'; break;
        case 190 : var txt = 'Kiev'; break;
        case 191 : var txt = 'Montevideo'; break;
        case 192 : var txt = 'Port-Vila'; break;
        case 193 : var txt = 'Vatican'; break;
        case 194 : var txt = 'Caracas'; break;
        case 195 : var txt = 'Hanoi'; break;
        case 196 : var txt = 'Sanaa'; break;
        case 197 : var txt = 'Lusaka'; break;
        case 198 : var txt = 'Harare'; break;
    }
    form.Capitale.options[0].text="--- Choisissez une page ---";
    for (i=0;i<1;i++) {
      form.Capitale.options[i].text=txt;
      //var pays = document.getElementById("paysId").value;
      var pays = document.getElementById("paysId").options[document.getElementById('paysId').selectedIndex].text; 
      document.getElementById("flag").src='images/'+pays+'.svg';
      document.getElementById("flag").style.display = 'block';
    }
}

function ChoixCapitale(form) {
    i = form.Capitale.selectedIndex;
    if (i == 0) {
      for (i=0;i<1;i++) {
        form.Pays.options[i].text="Choisissez une capitale";
        }
      return;
    }
    form.Pays.selectedIndex = 0;
    switch (i) {
        case 1 : var txt = 'Emirats Arabes Unis'; break;
        case 2 : var txt = 'Nigeria'; break;
        case 3 : var txt = 'Ghana'; break;
        case 4 : var txt = 'Turkménistan'; break;
        case 5 : var txt = 'Ethiopie'; break;
        case 6 : var txt = 'Algérie'; break;
        case 7 : var txt = 'Jordanie'; break;
        case 8 : var txt = 'Pays-Bas'; break;
        case 9 : var txt = 'Andorre'; break;
        case 10 : var txt = 'Turquie'; break;
        case 11 : var txt = 'Madagascar'; break;
        case 12 : var txt = 'Samoa'; break;
        case 13 : var txt = 'Erythrée'; break;
        case 14 : var txt = 'Kazakhstan'; break;
        case 15 : var txt = 'Paraguay'; break;
        case 16 : var txt = 'Grèce'; break;
        case 17 : var txt = 'Irak'; break;
        case 18 : var txt = 'Azerbaïdjan'; break;
        case 19 : var txt = 'Mali'; break;
        case 20 : var txt = 'Brunei'; break;
        case 21 : var txt = 'Thaïlande'; break;
        case 22 : var txt = 'République Centrafricaine'; break;
        case 23 : var txt = 'Gambie'; break;
        case 24 : var txt = 'Saint-Kitts-et-Nevis'; break;
        case 25 : var txt = 'Irlande du Nord'; break;
        case 26 : var txt = 'Serbie'; break;
        case 27 : var txt = 'Belize'; break;
        case 28 : var txt = 'Allemagne'; break;
        case 29 : var txt = 'Suisse'; break;
        case 30 : var txt = 'Liban'; break;
        case 31 : var txt = 'Kirghizistan'; break;
        case 32 : var txt = 'Guinée-Bissau'; break;
        case 33 : var txt = 'Colombie'; break;
        case 34 : var txt = 'Brésil'; break;
        case 35 : var txt = 'Slovaquie'; break;
        case 36 : var txt = 'Congo'; break;
        case 37 : var txt = 'Barbade'; break;
        case 38 : var txt = 'Belgique'; break;
        case 39 : var txt = 'Roumanie'; break;
        case 40 : var txt = 'Hongrie'; break;
        case 41 : var txt = 'Argentine'; break;
        case 42 : var txt = 'Burundi'; break;
        case 43 : var txt = 'Australie'; break;
        case 44 : var txt = 'Venezuela'; break;
        case 45 : var txt = 'Pays de Galles'; break;
        case 46 : var txt = 'Sainte-Lucie'; break;
        case 47 : var txt = 'Moldavie'; break;
        case 48 : var txt = 'Guinée'; break;
        case 49 : var txt = 'Danemark'; break;
        case 50 : var txt = 'Bangladesh'; break;
        case 51 : var txt = 'Sénégal'; break;
        case 52 : var txt = 'Syrie'; break;
        case 53 : var txt = 'Timor Oriental'; break;
        case 54 : var txt = 'Djibouti'; break;
        case 55 : var txt = 'Tanzanie'; break;
        case 56 : var txt = 'Qatar'; break;
        case 57 : var txt = 'Tadjikistan'; break;
        case 58 : var txt = 'Irlande'; break;
        case 59 : var txt = 'Ecosse'; break;
        case 60 : var txt = 'Arménie'; break;
        case 61 : var txt = 'Vienne'; break;
        case 62 : var txt = 'Tuvalu'; break;
        case 63 : var txt = 'Sierra Leone'; break;
        case 64 : var txt = 'Botswana'; break;
        case 65 : var txt = 'Guyana'; break;
        case 66 : var txt = 'Guatemala'; break;
        case 67 : var txt = 'Viêt Nam '; break;
        case 68 : var txt = 'Zimbabwe'; break;
        case 69 : var txt = 'Finlande'; break;
        case 70 : var txt = 'Iles Salomon'; break;
        case 71 : var txt = 'Pakistan'; break;
        case 72 : var txt = 'Indonésie'; break;
        case 73 : var txt = 'Israël'; break;
        case 74 : var txt = 'Afghanistan'; break;
        case 75 : var txt = 'Ouganda'; break;
        case 76 : var txt = 'Népal'; break;
        case 77 : var txt = 'Soudan'; break;
        case 78 : var txt = 'Ukraine'; break;
        case 79 : var txt = 'Rwanda'; break;
        case 80 : var txt = 'Jamaïque'; break;
        case 81 : var txt = 'Saint-Vincent-et-les-Grenadines'; break;
        case 82 : var txt = 'République Démocratique du Congo'; break;
        case 83 : var txt = 'Koweït'; break;
        case 84 : var txt = 'Malaisie'; break;
        case 85 : var txt = 'Cuba'; break;
        case 86 : var txt = 'Malte'; break;
        case 87 : var txt = 'Egypte'; break;
        case 88 : var txt = 'Gabon'; break;
        case 89 : var txt = 'Malawi'; break;
        case 90 : var txt = 'Pérou'; break;
        case 91 : var txt = 'Portugal'; break;
        case 92 : var txt = 'Slovénie'; break;
        case 93 : var txt = 'Togo'; break;
        case 94 : var txt = 'Angleterre'; break;
        case 95 : var txt = 'Angola'; break;
        case 96 : var txt = 'Zambie'; break;
        case 97 : var txt = 'Luxembourg'; break;
        case 98 : var txt = 'Espagne'; break;
        case 99 : var txt = 'Iles Marshall'; break;
        case 100 : var txt = 'Guinée équatoriale'; break;
        case 101 : var txt = 'Maldives'; break;
        case 102 : var txt = 'Nicaragua'; break;
        case 103 : var txt = 'Bahreïn'; break;
        case 104 : var txt = 'Philippines'; break;
        case 105 : var txt = 'Mozambique'; break;
        case 106 : var txt = 'Oman'; break;
        case 107 : var txt = 'Lesotho'; break;
        case 108 : var txt = 'Swaziland'; break;
        case 109 : var txt = 'Palaos'; break;
        case 110 : var txt = 'Mexique'; break;
        case 111 : var txt = 'Biélorussie'; break;
        case 112 : var txt = 'Somalie'; break;
        case 113 : var txt = 'Monaco'; break;
        case 114 : var txt = 'Liberia'; break;
        case 115 : var txt = 'Uruguay'; break;
        case 116 : var txt = 'Comores'; break;
        case 117 : var txt = 'Russie'; break;
        case 118 : var txt = 'Tchad'; break;
        case 119 : var txt = 'Kenya'; break;
        case 120 : var txt = 'Bahamas'; break;
        case 121 : var txt = 'Inde'; break;
        case 122 : var txt = 'Niger'; break;
        case 123 : var txt = 'Chypre'; break;
        case 124 : var txt = 'Mauritanie'; break;
        case 125 : var txt = 'Tonga'; break;
        case 126 : var txt = 'Norvège'; break;
        case 127 : var txt = 'Canada'; break;
        case 128 : var txt = 'Burkina Faso'; break;
        case 129 : var txt = 'Mongolie'; break;
        case 130 : var txt = 'Micronésie'; break;
        case 131 : var txt = 'Panama'; break;
        case 132 : var txt = 'Suriname'; break;
        case 133 : var txt = 'France'; break;
        case 134 : var txt = 'Chine'; break;
        case 135 : var txt = 'Cambodge'; break;
        case 136 : var txt = 'Monténégro'; break;
        case 137 : var txt = 'Ile Maurice'; break;
        case 138 : var txt = 'Papouasie-Nouvelle-Guinée'; break;
        case 139 : var txt = 'Trinité-et-Tobago'; break;
        case 140 : var txt = 'Haïti'; break;
        case 141 : var txt = 'Vanuatu'; break;
        case 142 : var txt = 'Bénin'; break;
        case 143 : var txt = 'République Tchèque'; break;
        case 144 : var txt = 'Cap-Vert'; break;
        case 145 : var txt = 'Afrique du Sud'; break;
        case 146 : var txt = 'Kosovo'; break;
        case 147 : var txt = 'Corée du Nord'; break;
        case 148 : var txt = 'Equateur'; break;
        case 149 : var txt = 'Maroc'; break;
        case 150 : var txt = 'Birmanie'; break;
        case 151 : var txt = 'Islande'; break;
        case 152 : var txt = 'Lettonie'; break;
        case 153 : var txt = 'Arabie Saoudite '; break;
        case 154 : var txt = 'Italie'; break;
        case 155 : var txt = 'Dominique'; break;
        case 156 : var txt = 'Grenade'; break;
        case 157 : var txt = 'Antigua-et-Barbuda'; break;
        case 158 : var txt = 'République Dominicaine'; break;
        case 159 : var txt = 'Saint-Marin'; break;
        case 160 : var txt = 'Costa Rica '; break;
        case 161 : var txt = 'Salvador'; break;
        case 162 : var txt = 'Yémen'; break;
        case 163 : var txt = 'Chili'; break;
        case 164 : var txt = 'São Tomé et Principe'; break;
        case 165 : var txt = 'Bosnie-Herzégovine'; break;
        case 166 : var txt = 'Corée du Sud'; break;
        case 167 : var txt = 'Singapour'; break;
        case 168 : var txt = 'Macédoine'; break;
        case 169 : var txt = 'Bulgarie'; break;
        case 170 : var txt = 'Sri Lanka '; break;
        case 171 : var txt = 'Suède'; break;
        case 172 : var txt = 'Bolivie'; break;
        case 173 : var txt = 'Fidji'; break;
        case 174 : var txt = 'Ouzbékistan'; break;
        case 175 : var txt = 'Taïwan'; break;
        case 176 : var txt = 'Estonie'; break;
        case 177 : var txt = 'Kiribati'; break;
        case 178 : var txt = 'Géorgie'; break;
        case 179 : var txt = 'Honduras'; break;
        case 180 : var txt = 'Iran'; break;
        case 181 : var txt = 'Bhoutan'; break;
        case 182 : var txt = 'Albanie'; break;
        case 183 : var txt = 'Japon'; break;
        case 184 : var txt = 'Libye'; break;
        case 185 : var txt = 'Tunisie'; break;
        case 186 : var txt = 'Liechtenstein'; break;
        case 187 : var txt = 'Pologne'; break;
        case 188 : var txt = 'Vatican'; break;
        case 189 : var txt = 'Seychelles'; break;
        case 190 : var txt = 'Laos'; break;
        case 191 : var txt = 'Lituanie'; break;
        case 192 : var txt = 'Etats-Unis'; break;
        case 193 : var txt = 'Nouvelle-Zélande'; break;
        case 194 : var txt = 'Namibie'; break;
        case 195 : var txt = 'Côte d\'Ivoire'; break;
        case 196 : var txt = 'Cameroun'; break;
        case 197 : var txt = 'Nauru'; break;
        case 198 : var txt = 'Croatie'; break;

    }
    form.Pays.options[0].text="--- Choisissez une page ---";
    for (i=0;i<1;i++) {
      form.Pays.options[i].text=txt;
      //var pays = document.getElementById("paysId").value;
      var pays = document.getElementById("paysId").options[document.getElementById('paysId').selectedIndex].text; 
      document.getElementById("flag").src='images/'+pays+'.svg';
    }
}
jQuery(function(){
    var $ = jQuery;
        
    $('select').on('change', function() {
        this.blur();
        console.log( this.value ); // or $(this).val()
        $("figure").removeClass("pop");
        function focusRegion(code) {
            var mapObj = $('#map1').vectorMap('get', 'mapObject');
            $('#map1').vectorMap('set', 'focus', {region: code, animate: true});
            mapObj.clearSelectedRegions();
            mapObj.setSelectedRegions([code]);
            onRegionSelected(function(){console.log("prout");}) 
        }
        focusRegion(this.value);

        $('#focus-init').click(function(){
            $('#map1').vectorMap('set', 'focus', {scale: 1, x: 0.5, y: 0.5, animate: true});
            // $('#focus-init').hide();
        });
    });

    $( "figure" ).click(function() {
        $( this ).toggleClass("pop");
    });

    $('#map1').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        zoomMax: 150,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1,
            animate: true
        },
        regionsSelectable: true,
        regionsSelectableOne: true,
        markersSelectable: true,
        markersSelectableOne: true,
        regionStyle: {
            initial: {
                fill: '#cbff8c'
            },
            selected: {
                fill: '#F4A582'
            }
        },
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [43.93, 12.46], name: 'San Marino'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ],
        markerStyle: {
          initial: {
            fill: '#FF0000',
            "fill-opacity": 1,
            "stroke": 'none',
            r: 2
          },
          selected: {
            r: 5
          }
        },
        onRegionClick: function(e, code){
            $('#map1').vectorMap('set', 'focus', {region: code, animate: true});
        }
    });


});