'use strict';

var plotlist = document.getElementById('plot-list');
var anchor = document.getElementById('embedded-graph');
var gd = null;

anchor.style.position = 'relative';
anchor.style.top = '80px';

function plotButtons(plots) {

    Object.keys(plots).forEach( function (plotname) {

        var button = document.createElement('button');

        button.style.cssFloat = 'left';
        button.style.width = '100px';
        button.style.height = '40px';

        button.innerHTML = plotname;

        plotlist.appendChild(button);

        button.addEventListener('click', function () {

            anchor.innerHTML = '';

            // create a fresh gd
            gd = document.createElement('div');
            anchor.appendChild(gd);

            var plot = plots[plotname];

            Plotly.plot(gd, plot.data, plot.layout);

        });
    });
}


var plots = {
    'marker-color': {
        data: [
            {
                type:'scatter3d',
                y:[-102.63,-110.53,-96.97,-163.59],
                x:[100.75,157.53,140.72,134.03],
                z:[100.75,157.53,140.72,134.03],
                marker: {
                    color: ['blue', 'orange', 'black'],
                    size: [10, 20, 30, 40]
                }
            }],
        layout: {
            title: "Scatter3d with under-defined marker color array"
        }
    },

    'log-axis': {
        data: [
            {
                type: 'scatter3d',
                mode: 'lines',
                x: [1,2,3,4,5],
                y: [1,2,3,4,5],
                z: [3,3,3,3,3],
                line: { width: 6 }
            },
            {
                type: 'scatter3d',
                mode: 'lines',
                x: [1,2,3,4,5],
                y: [3,2,1, 0, -1],
                z: [3,3,3, 3, 3],
                line: { width: 20 }
            }
        ],
        layout: {
            title: 'test',
            scene: {
                xaxis: {
                    type: 'log'
                }
            }
        }
    },


    'multi-scene': {
        data:  [{
            type: 'scatter3d',
            x: [1],
            y: [1],
            z: [1],
            marker: {color: 'blue'},
            scene: 'scene1'
        },{
            type: 'scatter3d',
            x: [2],
            y: [2],
            z: [2],
            marker: {color: 'red'},
            scene: 'scene2'
        }],
        layout: {
            title: '\'scene\' should be the same as \'scene1\'',
            scene1: {
                domain: {
                    x: [0, 0.5],
                    y: [0, 0.5]
                }
            },
            scene2: {
                domain: {
                    x: [0.5, 1],
                    y: [0.5, 1]
                }
            }
        }
    },

    'surface-lighting': {
        data: [{"name":"trace 0","z":[[1,-0.06844656669573754,0.13909637412225886,0.0826554534215686,0.07066432451801832,-0.10541871496785465,0.2743977671225373,-0.00644958548066308,0.05804396645716012,0.04099218151640123,-0.062207261912155774,-0.17562680450502027,0.03310653680001253,0.00844496649501268,-0.23388775692502753,0.007802855338842424,0.01787844481626813,0.003708553553159377,-0.022942206014684073,-0.015676350047133438],[-0.06844656669573754,1,0.3000549920197897,0.022440992104249678,0.08127672082325266,-0.006040490400149283,-0.10774703013839139,0.007181476765251404,0.09740557017267121,0.09118741827191708,0.11126009460063427,-0.12301488311706024,-0.0636589017019876,0.08513440959897098,0.1469553611561322,0.16698230569491326,-0.006192196234437996,0.044861949113859725,-0.028225306222551858,-0.06110496698751129],[0.13909637412225886,0.3000549920197897,1,0.33678569903704336,0.2566012032375724,0.12187245013279685,0.29613997423501,0.19372967118385195,0.3007856927994518,0.2742833783675412,0.06766894350805118,0.18886771090486085,0.12818578559058838,-0.012983042621203585,0.24048264845298686,0.2504755016390144,0.2761401652582817,0.21852709368444057,0.0972007596703115,0.26198632915878217],[0.0826554534215686,0.022440992104249678,0.33678569903704336,1,0.05827300807750921,-0.03862290518687405,0.08532737462720368,0.11110834940067102,0.10033255851509372,-0.059706049507020756,-0.06762821113390904,0.07849015184669614,-0.05167735028994855,-0.12780158564010613,0.089601100841209,0.02724340728939868,0.022457119758349832,0.09708726536211656,-0.11545997960535687,0.002804298478798059],[0.07066432451801832,0.08127672082325266,0.2566012032375724,0.05827300807750921,1,-0.056686553493531716,0.04524056909180166,0.02053720140006426,0.8662260448851651,-0.14625439316051636,-0.1602852887019016,-0.041119515530864785,0.14781278142908222,0.05721637498445887,-0.049244797056473756,-0.06937613730678335,0.023876634749075698,0.052106167623329515,0.026197432678280164,-0.031150600494012762],[-0.10541871496785465,-0.006040490400149283,0.12187245013279685,-0.03862290518687405,-0.056686553493531716,1,0.025927040065207976,-0.06234865369401485,-0.069296358700702,0.2084632450746581,0.0343688703172042,0.048216769461487334,0.03778739619521828,-0.059800363820071124,-0.12559947213982928,-0.10395966573881435,-0.046785208504717964,-0.03626606270933207,-0.11953161555366591,-0.1034034684201713],[0.2743977671225373,-0.10774703013839139,0.29613997423501,0.08532737462720368,0.04524056909180166,0.025927040065207976,1,-0.15188462793103694,0.005481907556655483,0.003288852372140115,-0.16585775960109206,-0.015666392956185625,0.041026700449074256,-0.08636685160605569,0.14245564518014567,0.00955480037170964,0.2762672879303321,0.02794101375033753,0.004725251562675768,-0.0727319684575901],[-0.00644958548066308,0.007181476765251404,0.19372967118385195,0.11110834940067102,0.02053720140006426,-0.06234865369401485,-0.15188462793103694,1,0.01759050941098293,-0.013502070995917227,-0.018971341812524977,0.06291163018181486,-0.005374139981432296,-0.11533704171417687,0.025956496630230377,-0.09156958826448341,0.020691490755022548,0.01132439407900668,0.15331183381069494,-0.023827647413758694],[0.05804396645716012,0.09740557017267121,0.3007856927994518,0.10033255851509372,0.8662260448851651,-0.069296358700702,0.005481907556655483,0.01759050941098293,1,-0.056861016403386457,-0.06849919740328674,-0.0840325109032821,0.09216160557183001,0.0930664138067602,-0.09135762907154338,-0.10801556044876666,-0.004004727813876452,0.10545473468212976,-0.09403175508344828,0.031488091084347476],[0.04099218151640123,0.09118741827191708,0.2742833783675412,-0.059706049507020756,-0.14625439316051636,0.2084632450746581,0.003288852372140115,-0.013502070995917227,-0.056861016403386457,1,0.03496796830444576,0.1323751576953198,-0.23604318037314279,0.051005768142442294,-0.04019255496374543,-0.0665843972358965,-0.019270113569992406,0.13027809578862284,0.024157416336300735,-0.010673272779832087],[-0.062207261912155774,0.11126009460063427,0.06766894350805118,-0.06762821113390904,-0.1602852887019016,0.0343688703172042,-0.16585775960109206,-0.018971341812524977,-0.06849919740328674,0.03496796830444576,1,-0.03614842374751606,-0.06729945365955652,0.03967066019588745,-0.09734256604225017,-0.12782165573582513,-0.10370708052856004,-0.23589998435712242,-0.11624489950144692,0.1474739321590516],[-0.17562680450502027,-0.12301488311706024,0.18886771090486085,0.07849015184669614,-0.041119515530864785,0.048216769461487334,-0.015666392956185625,0.06291163018181486,-0.0840325109032821,0.1323751576953198,-0.03614842374751606,1,-0.1888068892283808,-0.16973180531358495,0.013041253310188785,0.04102455542510709,-0.10774367845339843,-0.12338299435997677,0.15429538810136956,-0.004047474222474992],[0.03310653680001253,-0.0636589017019876,0.12818578559058838,-0.05167735028994855,0.14781278142908222,0.03778739619521828,0.041026700449074256,-0.005374139981432296,0.09216160557183001,-0.23604318037314279,-0.06729945365955652,-0.1888068892283808,1,0.0706116078372679,-0.05304551350813234,-0.02185823720355238,0.1259547692813846,0.09696171515552221,-0.17294793524202975,0.029053105355626222],[0.00844496649501268,0.08513440959897098,-0.012983042621203585,-0.12780158564010613,0.05721637498445887,-0.059800363820071124,-0.08636685160605569,-0.11533704171417687,0.0930664138067602,0.051005768142442294,0.03967066019588745,-0.16973180531358495,0.0706116078372679,1,-0.049326169280100494,-0.10755823702328653,-0.01691672860877323,-0.25987153430497417,-0.1818759836849265,0.060796092007235146],[-0.23388775692502753,0.1469553611561322,0.24048264845298686,0.089601100841209,-0.049244797056473756,-0.12559947213982928,0.14245564518014567,0.025956496630230377,-0.09135762907154338,-0.04019255496374543,-0.09734256604225017,0.013041253310188785,-0.05304551350813234,-0.049326169280100494,1,0.1405348300934011,0.15787152541228616,0.06231065307067294,0.027941493556242522,0.0698415986967098],[0.007802855338842424,0.16698230569491326,0.2504755016390144,0.02724340728939868,-0.06937613730678335,-0.10395966573881435,0.00955480037170964,-0.09156958826448341,-0.10801556044876666,-0.0665843972358965,-0.12782165573582513,0.04102455542510709,-0.02185823720355238,-0.10755823702328653,0.1405348300934011,1,0.0029033112600822994,0.03139635081760774,0.012546224602367035,-0.05809089858291145],[0.01787844481626813,-0.006192196234437996,0.2761401652582817,0.022457119758349832,0.023876634749075698,-0.046785208504717964,0.2762672879303321,0.020691490755022548,-0.004004727813876452,-0.019270113569992406,-0.10370708052856004,-0.10774367845339843,0.1259547692813846,-0.01691672860877323,0.15787152541228616,0.0029033112600822994,1,0.03126225604112421,0.014838950647985596,-0.04216422195826428],[0.003708553553159377,0.044861949113859725,0.21852709368444057,0.09708726536211656,0.052106167623329515,-0.03626606270933207,0.02794101375033753,0.01132439407900668,0.10545473468212976,0.13027809578862284,-0.23589998435712242,-0.12338299435997677,0.09696171515552221,-0.25987153430497417,0.06231065307067294,0.03139635081760774,0.03126225604112421,1,-0.13488511271137582,0.05764117930199809],[-0.022942206014684073,-0.028225306222551858,0.0972007596703115,-0.11545997960535687,0.026197432678280164,-0.11953161555366591,0.004725251562675768,0.15331183381069494,-0.09403175508344828,0.024157416336300735,-0.11624489950144692,0.15429538810136956,-0.17294793524202975,-0.1818759836849265,0.027941493556242522,0.012546224602367035,0.014838950647985596,-0.13488511271137582,1,-0.04161707552421025],[-0.015676350047133438,-0.06110496698751129,0.26198632915878217,0.002804298478798059,-0.031150600494012762,-0.1034034684201713,-0.0727319684575901,-0.023827647413758694,0.031488091084347476,-0.010673272779832087,0.1474739321590516,-0.004047474222474992,0.029053105355626222,0.060796092007235146,0.0698415986967098,-0.05809089858291145,-0.04216422195826428,0.05764117930199809,-0.04161707552421025,1]],"type":"surface","uid":"937dae","colorscale":[[0,"rgb(0,0,255)"],[0.1,"rgb(51,153,255)"],[0.2,"rgb(102,204,255)"],[0.3,"rgb(153,204,255)"],[0.4,"rgb(204,204,255)"],[0.5,"rgb(255,255,255)"],[0.6,"rgb(255,204,255)"],[0.7,"rgb(255,153,255)"],[0.8,"rgb(255,102,204)"],[0.9,"rgb(255,102,102)"],[1,"rgb(255,0,0)"]],"zmin":-0.25987153430497417,"zmax":1,"autobinx":true,"autobiny":true,"contours":{"x":{"highlight":false,"show":false},"y":{"highlight":false,"show":false},"z":{"highlight":false,"show":false}},"lighting":{"fresnel":0.59,"roughness":0.99,"diffuse":0.01,"ambient":0.35,"specular":0.99}}],
        layout: {"title":"Correlation Matrix","width":874,"height":569,"autosize":true,"margin":{"l":70,"r":200,"t":60,"b":60,"pad":2},"showlegend":false, "scene": {"cameraposition":[[-0.17132380604743958,-0.04797057807445526,0.2664908170700073,-0.9472748637199402],[0,0,0],2.165063509461097]}}
   }

};



plotButtons(plots);
