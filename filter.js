//Configurazione generale di ogni filtro
            ProductFilter.defaultConfig = {
                fulltextSearchEnabled: true,    //server ad abilitare la ricerca testuale (opzionale, di default false)
                filters:[                       // elenco filtri
                    {
                        tagPrefix: 'C-',        // prefisso usato nei tag per individuare i valori di questo filtro
                        label: 'Categoria',     
                        code: 'cat',            // codice del filtro, viene messo come "name" nella select del filtro e nel div contenitore del filtro, con questa convenzione: "filter-CODICE". Può essere utile per interventi puntuali su singoli filtri
                        noSelectedText:'Tutte'  // testo da mostrare di default nella tendina (se omesso viene messo a vuoto)
                    },
                    {
                        tagPrefix: 'M-',
                        label: 'Marchio',
                        code: 'marchio',
                        noSelectedText:'Tutti'
                    }
                ]
            }

            function onSuccessLoadStore1MS(){
                ProductFilter.generate();

                //qui è possibile inserire traduzioni diverse per i test del filtro
                translations["label.ecommerce.product-filter.fulltext_search"]="Nome prodotto";
                translations["button.ecommerce.product-filter.filter"]="Filtra";
                translations["label.ecommerce.product-filter.no_results"]="Nessun prodotto corrispondente ai criteri di ricerca";
            }