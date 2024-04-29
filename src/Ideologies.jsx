import React from 'react'

function Ideologies(props) {
    if(props.x>-11 && props.x<11 && props.y > -11 && props.y<11){
        return <div data-testid="DisplayIdeology">Centrism</div>
    }
    if( props.x>-11 && props.x<11 && props.y<-11 && props.y>-22){
        return <div data-testid="DisplayIdeology">Swiss democracy</div>
    }
    if(props.x>11 && props.x<22 &&  props.y > -11 && props.y<11){
        return <div data-testid="DisplayIdeology">Traditionalism</div>
    }
    if( props.x>11 && props.x<22 &&  props.y<-11 && props.y>-22){
        return <div data-testid="DisplayIdeology">Classical Republic</div>
    }
    if( props.x>11 && props.x<22 && props.y>11 && props.y<33){
        return <div data-testid="DisplayIdeology">Paternalism</div>
    }
    if( props.x>-22 && props.x<-11 &&  props.y<-11 && props.y>-22){
        return <div data-testid="DisplayIdeology">Athenian Democracy</div>
    }
    if( props.x>-22 && props.x<-11 && props.y > -11 && props.y<11  ){
        return <div data-testid="DisplayIdeology">Labourism</div>
    }
    if( props.x>-22 && props.x<-11 && props.y>11 && props.y<33){
        return <div data-testid="DisplayIdeology">Ataturkism</div>
    }
    if(props.x>-11 && props.x<11 &&  props.y>11 && props.y<33){
        return <div data-testid="DisplayIdeology">Kuomintang</div>
    }
    //ЦЕНТРИЗМ-ПРАВО
    if(props.x>33 && props.x<55 && props.y>11 && props.y<33  ){
        return <div data-testid="DisplayIdeology">Dengism</div>
    }
    if(props.x>55 && props.x<77 &&  props.y>11 && props.y<33  ){
        return <div data-testid="DisplayIdeology">Corporatocracy</div>
    }
    if(props.x>77 && props.x<=100 &&  props.y>11 && props.y<33 ){
        return <div data-testid="DisplayIdeology">Right Wing Nationalism</div>
    }
    if(props.x>33 && props.x<55 &&  props.y > -11 && props.y<11){
        return <div data-testid="DisplayIdeology">Libertarianism</div>
    }
    if( props.x>55 && props.x<77 && props.y > -11 && props.y<11  ){
        return <div data-testid="DisplayIdeology">Capitalism</div>
    }
    if( props.x>77 && props.x<100 &&  props.y > -11 && props.y<11  ){
        return <div data-testid="DisplayIdeology">Libertian Democracprops.y</div>
    }
    if( props.x>33 && props.x<55 &&  props.y<-11 && props.y>-33  ){
        return <div data-testid="DisplayIdeology">Maritime Republic</div>
    }
    if( props.x>55 && props.x<77 &&  props.y<-11 && props.y>-33){
        return <div data-testid="DisplayIdeology">Smart Populism</div>
    }
    if( props.x>77 && props.x<100 && props.y<-11 && props.y>-33){
        return <div data-testid="DisplayIdeology">Confederatism</div>
    }
     //ЦЕНТРИЗМ-ЛІВО
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Baathism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">MMM</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Left wing nationalism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Maosism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Social Democracprops.y</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Christian Democracprops.y</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Posadism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Syndicalism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Christiam Sprops.yndicalism</div>
    }
    //ЛІВАЦЬКІ ЛІБЕРАЛИ
    if(props.x>-100 && props.x<-77 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Fully Automated Luxury Gay Space Communism</div>
    }
    if(props.x>-77 && props.x<-44 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Social Democracy</div>
    }
    if(props.x>-44 && props.x<-22 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Welfarism</div>
    }
    if(props.x>-100 && props.x<-77 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">First Internationale Ideas</div>
    }
    if(props.x>-5 && props.x<5 &&  props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Post modernism</div>
    }
        if(props.x>-5 && props.x<5 && props.y>-77 && props.y<-55){
    return <div data-testid="DisplayIdeology">Agrarianism</div>
        }
    if(props.x>-100 && props.x<-77 && props.y<=-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Anarcho-Communism</div>
    }
    if(props.x>-5 && props.x<5 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Anarcho syndicalism</div>
        }
    if(props.x>-5 && props.x<5 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Amish</div>
        }
    //Ліберали центр
    if(props.x>-22 && props.x<-11 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Nordic Liberalism</div>
    }
    if(props.x>-11 && props.x<11 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Anarcho Totalitarianism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-5 && props.y<10){
        return <div data-testid="DisplayIdeology">Anarcho Technocracprops.y</div>
    }
    if(props.x>-22 && props.x<-11 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Anarcho Frontierism</div>
    }
    if(props.x>-11 && props.x<11 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Social Libertarianlism</div>
    }
    if(props.x>11 && props.x<22 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Amerindianism Council</div>
    }
    if(props.x>11 && props.x<22 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Accelerationism</div>
    }
    if(props.x>-11 && props.x<11 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Anarchism</div>
    }
    if(props.x>11 && props.x<22 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Individualist anarchism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Anarcho Fascism</div>
    }
    //Анкап
    if(props.x>-5 && props.x<5 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Liberal Corporatism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-33 && props.y<-11){
        return <div data-testid="DisplayIdeology">Hoppeanism</div>
    }
    if(props.x>-5 && props.x<5 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Neoliberal</div>
    }
    if(props.x>55 && props.x<77 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Classical Libertanialism</div>
    }
    if(props.x>77 && props.x<=100 && props.y>-77 && props.y<-55){
        return <div data-testid="DisplayIdeology">Paleo Libertanialism</div>
    }
    if(props.x>33 && props.x<55 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Anarcho capitalism</div>
    }
    if(props.x>55 && props.x<77 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Austrian School ideas</div>
    }
    if(props.x>77 && props.x<=100 && props.y<-77 && props.y>=-100){
        return <div data-testid="DisplayIdeology">Minarchism</div>
    }
    //Комуністи
    if(props.x>=-100 && props.x<-77 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Stalinism</div>
    }
    if(props.x>-55 && props.x<-77 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Maoism</div>
    }
    if(props.x>-33 && props.x<-55 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Juche</div>
    }
    if(props.x>=-100 && props.x<-77 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Trotskyism</div>
    }
    if(props.x>=-100 && props.x<-77 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Collectivism</div>
    }
    if(props.x>-77 && props.x<-55 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Castroism</div>
    }
    if(props.x>-77 && props.x<-55 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Left populism</div>
    }
    if(props.x>-77 && props.x<-55 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Ho Chi Mihn Thought</div>
    }
    if(props.x>-55 && props.x<-33 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Extreme Socialism Centrism</div>
    }
    //Правий тоталітар
    if( props.x>33 && props.x<55 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Nazism</div>
    }
    if( props.x>77 && props.x<=100 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Fiscal Convervatism</div>
    }
    if(props.x>33 && props.x<55 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">right wing populism</div>
    }
    if(props.x>33 && props.x<55 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Neoconservatism.y</div>
    }
    if(props.x>55 && props.x<77 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Confederalism</div>
    }
    if(props.x>77 && props.x<=100 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Monarchy</div>
    }
    if(props.x>55 && props.x<77 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Pinnochetism</div>
    }
    if(props.x>77 && props.x<=100 && props.y>55 && props.y<77){
        return <div data-testid="DisplayIdeology">Paleoconservatism</div>
    }
    if(props.x>55 && props.x<77 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Aristocracy</div>
    }
    //ЦЕНТРИЗМ АВТОРИТАР
    if(props.x>-22 && props.x<-11 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Eco-fascism</div>
    }
    if(props.x>-22 && props.x<-11 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Futurist</div>
    }
    if(props.x>-22 && props.x<-11 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Kleptocracy</div>
    }
    if(props.x>-11 && props.x<11 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Totaliranism</div>
    }
    if(props.x>-11 && props.x<11 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Authoritatism</div>
    }
    if(props.x>-11 && props.x<11 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Third Way</div>
    }
    if(props.x>11 && props.x<22 && props.y>77 && props.y<=100){
        return <div data-testid="DisplayIdeology">Fascism</div>
    }
    if(props.x>11 && props.x<22 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Moralism</div>
    }
    if(props.x>11 && props.x<22 && props.y>33 && props.y<55){
        return <div data-testid="DisplayIdeology">Senatorialism</div>
    }
        
}

export default Ideologies