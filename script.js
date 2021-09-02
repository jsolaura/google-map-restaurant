initMap();
function initMap() {
    // Map options
    var options = {
        zoom: 13,
        center: { lat:37.551382027533165, lng:126.9882051401976 }
    }
    
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(e) {
        // Add marker
        addMarker({coords:e.latLng});
    });

    var markers = [
        {
            coords:{ lat:37.551382027533165, lng:126.9882051401976 },
            label: {
                text: "landscape",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            // iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content:'<h2>⛰ Namsan Tower</h2>'
        },
        {
            coords:{ lat:37.551200280545444, lng:126.91945575554324 },
            label: {
                text: "account_balance",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🏘 Peopulley</h2>'
        },
        {
            coords:{ lat:37.547293228694464, lng:127.04665739007216 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🥞 종가빈대떡 <p>뚝섬역 6번출구 녹두전 찐맛집</p></h2>'
        },
        {
            coords:{ lat:37.54571650430734, lng:126.97006458252461 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍖 청파 쌍대포 <p>청파동 숯불고기집</p></h2>'
        },
        {
            coords:{ lat:37.54890300359682, lng:126.91634788252468 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍜 리틀 파파포 <p>합정 쌀국수 맛집</p></h2>'
        },
        {
            coords:{ lat:37.57833502787925, lng:126.97124486903483 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍜 칸다소바 <p>경복궁역 소바 맛집</p></h2>'
        },
        {
            coords:{ lat:37.55928946986, lng:126.96853379787068 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍗 호수집 <p>서소문역사공원 앞 닭꼬치 최자로드</p></h2>'
        },
        {
            coords:{ lat:37.5731460482451, lng:126.9743688113618 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🥗🍹 루뽀 <p>광화문역 분위기내기 좋은 유럽레스토랑</p></h2>'
        },
        {
            coords:{ lat:37.5764477284916, lng:126.9715284132171 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🦪 계단집 <p>서촌 해산물포차</p></h2>'
        },
        {
            coords:{ lat:37.56519385338908, lng:126.99028649787088 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🧆 스탠딩바 전기 <p>을지로 스탠딩바 퓨전한식</p></h2>'
        },
        {
            coords:{ lat:37.56531464883178, lng:127.01302814205302 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🥩 우육미 <p>신당동 티본스테이크계의 성지</p></h2>'
        },
        {
            coords:{ lat:37.54708422697377, lng:127.04392824205249 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍜 라멘오야지 <p>서울숲 라멘집</p></h2>'
        },
        {
            coords:{ lat:37.54659119594892, lng:127.04633296903378 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍣 아오미 <p>성수 사시미맛집</p></h2>'
        },
        {
            coords:{ lat:37.54653614135932, lng:127.04734235554308 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍝 누메로도스 <p>성수 퓨전양식집</p></h2>'
        },
        {
            coords:{ lat:37.54696230802657, lng:127.04530364205259 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🧀 유어네이키드치즈 <p>서울숲 성수 와인바</p></h2>'
        },
        {
            coords:{ lat:37.54399178101888, lng:127.05016936903377 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🥂 TBD <p>성수 와인바</p></h2>'
        },
        {
            coords:{ lat:37.54332902999214, lng:127.05537204019743 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🍛 탐광 <p>성수 가츠동 카레 맛집</p></h2>'
        },
        {
            coords:{ lat:37.55769648618822, lng:127.08175230710631 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🥘 데판야끼 한 <p>군자 철판요리집</p></h2>'
        },
        {
            coords:{ lat:37.54900675289225, lng:126.91624989787043 },
            label: {
                text: "restaurant",
                fontFamily: "Material Icons",
                color: "#ffffff",
                fontSize: "18px",
            },
            content:'<h2>🫕 쿠이신보 <p>합정 이자카야 꼬치 맛집</p></h2>'
        },

    ]

    // Loop through markers
    for(var i=0; i<markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    
    // Add marker function
    function addMarker(props) {

        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            label: props.label,
            
        });

        // check for customicon
        if( props.iconImage ) {
            // set icon image
            marker.setIcon(props.iconImage);
        }

        // check content
        if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }

    }
    
}