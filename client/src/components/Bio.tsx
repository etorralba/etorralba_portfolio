import React from "react";
//@ts-ignore
import etorralba_photo from '../assets/etorralba_photo.png';

const Bio: React.FC = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="flex items-center">
                <div>
                    <h1 className="w-min font-serif text-5xl text-wrap">ernesto torralba<span
                        className="text-orange-600">.</span></h1>
                    <p className="text-xl font-light">fullstack developer</p>
                    <div className="w-full flex justify-center">
                        <div className="mt-10 h-px w-8 bg-orange-600"></div>
                    </div>
                    <div className="mt-10 w-72">
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipiscing, elit lacinia a primis
                            pretium sodales, mus purus est auctor platea. Dignissim risus mi natoque integer tempus
                            conubia mattis montes turpis, vestibulum sodales donec cum vel inceptos scelerisque lectus,
                            orci sociosqu semper interdum malesuada convallis sed fringilla. Nullam fames habitant
                            mollis sagittis ultrices nulla, cum diam donec fringilla orci convallis, quam venenatis
                            pellentesque aenean tortor. Risus placerat arcu congue posuere inceptos interdum porttitor
                            tortor gravida sollicitudin sociosqu platea suscipit lacus volutpat, bibendum facilisi
                            magnis hac lectus sem cursus dis urna ultrices hendrerit penatibus vitae.</p>
                    </div>
                </div>
                <div className="ml-16">
                    <img src={etorralba_photo as string} alt="placeholder" className="w-72"/>
                </div>
            </div>
        </div>
    );
}

export default Bio;