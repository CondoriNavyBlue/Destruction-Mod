const addTechTree = (content, research) => {
    if (!content) {
        throw new Error('子内容为空!,');
    }
    if (!research.parent) {
        throw new Error('研究。父母为空!');
    }
    var researchName = research.parent;
    var customRequirements = research.requirements;
    var objectives = research.objectives;

    var lastNode = TechTree.all.find(boolf(t => t.content == content));
    if (lastNode != null) {
        lastNode.remove();
    }

    var node = new TechTree.TechNode(null, content, customRequirements !== undefined ? customRequirements : content.researchRequirements());
    var currentMod = Vars.mods.getMod("destructionmod");
    if (objectives) {
        node.objectives.addAll(objectives);
    }

    if (node.parent != null) {
        node.parent.children.remove(node);
    }

    // find parent node.
    var parent = TechTree.all.find(boolf(t => t.content.name.equals(researchName) || t.content.name.equals(currentMod.name + "-" + researchName)));

    // if (parent == null) {
    //     throw new Error("Content '" + researchName + "' isn't in the tech tree, but '" + content.name + "' requires it to be researched.");
    // }
    if (parent == null) {
        throw new Error("'内容 '" + researchName + "' 不在科技树上, 但 '" + content.name + "'需要对其研究.");
    }
    // add this node to the parent
    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }
    // reparent the node
    node.parent = parent;
};

module.exports = addTechTree;

//DaRealMonika's Code
//Thank you