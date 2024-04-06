import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className='row'>
        <div className='col-lg-4 mx-auto'>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button
                    className={`accordion-button ${activeAccordion === 'collapseOne' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseOne')}
                    aria-expanded={activeAccordion === 'collapseOne'}
                    aria-controls="collapseOne"
                >
                    Accordéon Article #1
                </button>
                </h2>
                <div
                id="collapseOne"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseOne' ? 'show' : ''}`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body">
                    <strong>Il s'agit du corps d'accordéon du premier article.</strong> Il est affiché par défaut, jusqu'à ce que le plug-in de réduction ajoute les classes appropriées que nous utilisons pour styliser chaque élément. Ces classes contrôlent l'apparence générale, ainsi que l'affichage et le masquage via les transitions CSS. Vous pouvez modifier tout cela avec du CSS personnalisé ou en remplaçant nos variables par défaut. Il convient également de noter que pratiquement n'importe quel code HTML peut être placé dans le format .accordion-body, bien que la transition limite le débordement.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button
                    className={`accordion-button ${activeAccordion === 'collapseTwo' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseTwo')}
                    aria-expanded={activeAccordion === 'collapseTwo'}
                    aria-controls="collapseTwo"
                >
                    Accordéon Article #2
                </button>
                </h2>
                <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseTwo' ? 'show' : ''}`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body">
                    <strong>Il s'agit du corps d'accordéon du deuxième article.</strong> Il est masqué par défaut, jusqu'à ce que le plug-in de réduction ajoute les classes appropriées que nous utilisons pour styliser chaque élément. Ces classes contrôlent l'apparence générale, ainsi que l'affichage et le masquage via les transitions CSS. Vous pouvez modifier tout cela avec du CSS personnalisé ou en remplaçant nos variables par défaut. Il convient également de noter que pratiquement n'importe quel code HTML peut être placé dans le format .accordion-body, bien que la transition limite le débordement.
                </div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
  );
};

export default Accordion;
