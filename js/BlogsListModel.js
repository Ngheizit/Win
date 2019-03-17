
require(["dojo/_base/declare", "dijit/_Widget", "dijit/_TemplatedMixin", "dojo/dom-construct"],function(declare, _Widget, _TemplatedMixin, domConstruct){
	declare("BlogsList",[_Widget, _TemplatedMixin], {
		//初始化参数
		blogtitle: "unknow",
		blogtime: "unknown",
		blogbrief: "unknown",
		blogkeyword: "unknown",
		templateString: "<div>" +
							"<div class='blogtitle'>🐱‍👤<span data-dojo-attach-point='blogtitleNode'></span></div>" + 
							"<div class='blogtime'>Time：<span data-dojo-attach-point='blogtimeNode'></span></div>" + 
							"<div class='blogbrief'><span data-dojo-attach-point='blogbriefNode'></span></div>" +
							"<div class='blogkeyword'>Keyword：<span data-dojo-attach-point='blogkeywordNode'></span></div>" +
						"</div>",
		attributeMap:{
			blogtitle:{
				node: "blogtitleNode",
				type: "innerHTML"
			},
			blogtime:{
				node: "blogtimeNode",
				type: "innerHTML"
			},
			blogbrief:{
				node: "blogbriefNode",
				type: "innerHTML"
			},
			blogkeyword:{
				node: "blogkeywordNode",
				type: "innerHTML"
			}
		}
	});
});
require(["dojo/parser", "dojo/domReady!"], function(parser){
	parser.parse();
});
