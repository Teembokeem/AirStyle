(function () {
    'use strict';
    angular.module('Faq.view.module')
        .component('faqBanlist', {
            bindings: {

            },
            templateUrl: 'views/faq/faq-banlist/faq-banlist.html',
            controller: faqBanlistCtrl,
            controllerAs: 'cc'
        })

    faqBanlistCtrl.$inject = ['$log'];

    function faqBanlistCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
            cc.faqBanlistContent = {
                yesList: [
                    'All Ages Welcome',
                    'Baby Strollers',
                    'Backpacks (medium)',
                    'Camelbaks (empty)',
                    'Cell Phones/Chargers',
                    'Chapstick/Lip Balm',
                    'Cigarettes/Lighters',
                    'Dancing Shoes',
                    'Digital & Video Cameras (non-pro)',
                    'Ear Plugs',
                    'Eye Drops (subject to testing)',
                    'Fanny Packs/Hip Bags',
                    'GoPros/Flip Cams',
                    'Gum',
                    'Hats',
                    'Makeup',
                    'Parasols',
                    'Purses/Handbags',
                    'Smiles',
                    'Sun Block (non-aerosol)',
                    'Sunglasses',
                    'Walkie-talkies',
                    'Water Bottles (empty plastic reusable)'
                ],
                noList: [
                    'Aerosol Products/Aerosol Cans',
                    'Air Horns',
                    'Audio Recording Devices',
                    'Bikes',
                    'Blankets/Towerls',
                    'Bottles (glass or metal)',
                    'Cameras (detachable lens)',
                    'Chains/Chain Wallets',
                    'Chairs',
                    'Coolers',
                    'Drones, Remote Control Aircraft/Toys/Cars',
                    'Drugs or Drug Paraphernalia',
                    'e-Cigs/Vapes',
                    'Fireworks/Explosives/Road Flares',
                    'Flags',
                    'Flyers/Sampling/Giveaways',
                    'Glow Sticks/LED Gloves',
                    'Guns/Ammunition/Tasers',
                    'Hoverboards',
                    'Hula Hoops',
                    'Ins & Outs',
                    'Instruments',
                    'Kites/Sky Lanterns',
                    'Knives/Weapons/Sharp Objects',
                    'Laser Pointers',
                    'Mace/Pepper Spray',
                    'Massagers',
                    'Outside Food or Beverage',
                    'Pets/Animals (unless ADA approved)',
                    'Promotional Items',
                    'Scooters/Segways',
                    'Selfie Sticks/Narcissists/Tripods',
                    'Sharpies/Markers/Paint Pens',
                    'Skateboards/Skates',
                    'Squirt Guns/Toy Guns/Sling Shots',
                    'Stuffed Animals',
                    'Totems',
                    'Umbrellas',
                    'Video Cameras'
                ]
            }
        }
    }
})();