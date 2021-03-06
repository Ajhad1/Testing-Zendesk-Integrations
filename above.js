// <script type="text/javascript" src="https://combinatronics.com/Ajhad1/Testing-Zendesk-Integrations/main/above.js"></script>

// sets widgets intial settings
window.zESettings = {
    webWidget: {
        launcher: {
            // changes initial widget label to string provided
            label: {
                '*': ' '
            }
        },
        helpCenter: {
            // changes 1st ticket button to string provided
            messageButton: {
                '*': 'Submit A Ticket'
            },
            supress: false
        },
        contactOptions: {
            enabled: true,
            // changes 2nd ticket button to string provided
            contactButton: { '*': 'Submit A Ticket' }
        },
        contactForm: {
            // changes ticket title to string provided
            title: {
                '*': 'Submit A Ticket'
            },
            // Prefills fields
            fields: [
                // pulls url and enters into URL field
                // to do - add RockMon Variable
                { id: '22736400', prefill: { '*': window.location.href } },
                // prefills description box with String
                { id: 'description', hint: { '*': 'Enter a Detailed Description Here' }, hideHint: false },
                // prefills Enviroment with String
                // to do - add RockMon Variable
                // { id: '46633588', prefill: { '*': 'Prod' } },
                // prefills application name with String
                // to do - add RockMon Variable
                // { id: '48952228', prefill: { '*': 'RockMon' } },
                // prefills Steps to Reproduce with String
                // to do - add RockMon Variable
                //{ id: '360039260793', prefill: { '*': 'Enter Steps to Reproduce Here' } },
                // prefills Expected and Actual with String
                // to do - add RockMon Variable
                //{ id: '360039261073', prefill: { '*': 'Enter Expected vs Actual Here' } },
            ],
            suppress: false
        },
        chat: {
            suppress: true
        },
        talk: {
            suppress: true
        },
        answerBot: {
            suppress: true,
            contactOnlyAfterQuery: true
        }
    }
};
