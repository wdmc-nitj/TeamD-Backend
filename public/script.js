const btn = document.querySelector('a.del');

                // add an event listener to the delete button and for toggle button
            // const deleteUpdate = (endpoint) => {
            //     fetch(endpoint, {
            //     method: 'DELETE',
            //     })
            //     .then((response) => response.json())
            //     .then((data) => window.location.href = data.redirect)
            //     .catch((err) => console.log(err));
            // };
            
            const toggleUpdate = (enabled, endpoint) => {
                var detailsToModify = {
                    enabled: btn.dataset.enabled
                }
                var formBody = [];
                for (var property in detailsToModify) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(detailsToModify[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(endpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                })
                .then((response) => response.json())
                .then((data) => window.location.href = data.redirect)
                .catch((err) => console.log(err));
            };

            btn.addEventListener('click', (e) => {
                const endpoint = `/admissions/ug/updates/${btn.dataset.id}`;
                const action = btn.dataset.action;
                
                const enabled = btn.dataset.enabled;
                toggleUpdate(enabled, endpoint);

                // if (action === 'delete'){
                //     deleteUpdate(endpoint);
                // }
                // else if (action === 'toggle'){
                //     const enabled = btn.dataset.enabled;
                //     toggleUpdate(enabled, endpoint);
                // }
                    
            });