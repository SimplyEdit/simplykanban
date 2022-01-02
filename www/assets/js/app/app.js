
let simplyApp = simply.app({
	routes: {
	},
	keyboard: {
		default: {
		}
	},
	commands: {
		openDialog: function(el, value) {
			hyperPages.openDialog(value);
		},
		closeDialog: function(el, value) {
			hyperPages.closeDialog(value);
		},
		createKanbanBoard: function(form, values) {
			let path = '/'+values.name+'/';
			if (editor.currentData[path]) {
				alert(path+' already exists');
			} else {
				simplyApp.commands.closeDialog(form, 'kanbanBoard');
				editor.currentData[path] = {
					'data-simply-template': 'kanban',
					'title': values.name,
					'columns': [
						{
							'label':'Backlog',
							'cards':[]
						},
						{
							'label':'Todo',
							'cards':[]
						},
						{
							'label':'Doing',
							'cards':[]
						},
						{
							'label':'Done',
							'cards':[]
						}
					]
				};
				hyperPages.goto(path);
			}
		},
		addCard: function(el, value) {
			let listEl = el.closest('.kanban-list');
			let cardsEl = listEl.querySelector('.kanban-cards');
			let list = cardsEl.dataBinding.get();
			list.push({
				description: 'New Card'
			});
		}
	},
	actions: {

	},
	view: {
	}
});

hyperPages.goto('/');
