// src/data/casesData.js

export const casesData = [
    {
        id: 1,
        title: "赛博朋克游侠",
        category: "character",
        image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tris: "5k Tris",
        tags: ["FBX", "PBR"],
        description: "基于 SDXL 生成概念图，经 Hunyuan3D 转模并人工修复布线，适用于 Unity URP 管线。",
        tagType: "Character",
        tagColor: "brand" 
    },
    {
        id: 2,
        title: "矮人符文战斧 (Dwarven Axe)",
        category: "prop",
        image: "/images/Axe.webp", 
        tris: "7k Tris",
        tags: ["Hero Prop", "Retopology", "Game Ready"],
        description: "专为第三人称/第一人称视角打造的主角级资产 (Hero Asset)。在保留斧柄缠绕物与金属倒角物理细节的前提下，将面数严格控制在 7,000 三角面 (Tris) 左右。布线流畅，完美支持形变动画与近距离特写展示。",
        tagType: "Weapon",
        tagColor: "orange",
        modelPath: "https://github.com/KeonSuYun/my-website/releases/download/v1.0/SM_Axe_Low.glb",
        fileSize: "105 MB", 
        wireframe: "/images/Axe_wireframe.webp"
    },
    {
        id: 3,
        title: "异星遗迹",
        category: "environment",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tris: "Scene",
        tags: ["Modular", "UE5"],
        description: "模块化场景组件包，包含12个独立的建筑废墟与植被资产。",
        tagType: "Environment",
        tagColor: "emerald"
    },
    {
        id: 4,
        title: "重型工程机甲",
        category: "prop",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tris: "12k Tris",
        tags: ["Rigged", "4K Textures"],
        description: "硬表面建模练习，强调机械结构的合理性与做旧纹理细节。",
        tagType: "Hard Surface",
        tagColor: "orange"
    },
    {
        id: 5,
        title: "Q版法师",
        category: "character",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tris: "3k Tris",
        tags: ["Mobile", "V-Ray"],
        description: "高饱和度色彩与夸张比例，利用 AI 快速生成多套配色方案供客户选择。",
        tagType: "Stylized",
        tagColor: "pink"
    },
    {
        id: 6,
        title: "便携式能量核心",
        category: "prop",
        image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tris: "1.5k Tris",
        tags: ["Animation", "Game Ready"],
        description: "包含自发光贴图与简单的待机动画绑定。",
        tagType: "Sci-Fi",
        tagColor: "blue"
    }
];