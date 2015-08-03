            // Load native UI library
            var gui = require('nw.gui');

            // Create an empty menu
            var menu = new gui.Menu();

            // Get the current window
            var win = gui.Window.get();

            // Create a menubar for window menu
            var menubar = new gui.Menu({ type: 'menubar' });

            // Create a menuitem
            var sub1 = new gui.Menu();
            var sub2 = new gui.Menu();

            sub1.append(new gui.MenuItem({
                label: 'Help',
                click: function() {
                    var win = gui.Window.open('./help.html', {
                        position: 'center',
                        width: 400,
                        height: 200,
                        frame: false,
                    }, console.log('you need help?'));
                }
            }));

            sub1.append(new gui.MenuItem({
                label: 'Quit',
                click: function() {
                    process.exit();
                }
            }));

            menubar.append(new gui.MenuItem({ label: 'Sub1', submenu: sub1}));

            //assign the menubar to window menu
            win.menu = menubar;
