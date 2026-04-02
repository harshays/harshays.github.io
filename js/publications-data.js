window.PUBLICATIONS = [
  {
    id: "rank",
    title: "Do Language Models Robustly Acquire New Knowledge?",
    href: "#rank",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>, Badih Ghazi, Yangsibo Huang, Ravi Kumar, Da Yu, Chiyuan Zhang</span><br/>
      <span class="paper-venue paper-venue-workshop">Workshop on Continual Foundation Model Updates</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/ccfm-neurips2025">NeurIPS CCFM</a>)</span>, 2025</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>, B. Ghazi, Y. Huang, R. Kumar, D. Yu, C. Zhang</span><br/>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/ccfm-neurips2025">NeurIPS CCFM</a></span>, 2025</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    links: [],
    abstractHtml: `
      Language models acquire vast knowledge during pretraining, but adding new knowledge to pretrained models often lacks robustness&mdash;models can retrieve individual facts but struggle with multi-hop reasoning over newly acquired knowledge and its implications. To systematically study this robustness gap, we introduce RANK (Robust Acquisition of New Knowledge), a testbed using synthetic knowledge graphs to evaluate knowledge acquisition via k-hop reasoning tasks of increasing complexity. Our evaluation of supervised fine-tuning (SFT) and in-context learning (ICL) using RANK reveals that ICL performance degrades with reasoning complexity and knowledge scale, while SFT trained on simple facts fails completely at multi-hop reasoning. However, we find that increasing training data diversity induces a sharp phase transition of fine-tuned models from memorization to out-of-distribution generalization.
    `
  },
  {
    id: "moe",
    title: "Parameters vs FLOPs: Scaling Laws for Optimal Sparsity of MoE Language Models",
    href: "https://arxiv.org/abs/2501.12370",
    infoDesktopHtml: `
      <span class="paper-authors">Samira Abnar*, <span class="underline">Harshay Shah</span>*, Dan Busbridge, Alaa El-Nouby, Josh Susskind, Vimal Thilak*</span><br/>
      <span class="paper-venue">International Conference on Machine Learning</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2025">ICML</a>)</span>, 2025<br>
      <span class="paper-venue paper-venue-workshop">+ Workshop on Sparsity in LLMs</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://www.sparsellm.org/schedule">ICLR SLLM</a>)</span>, 2025</span>
      <img class="shields" src="https://img.shields.io/badge/-best_paper_award-navy?style=flat-square" alt=""><br>
    `,
    infoMobileHtml: `
      <span class="paper-authors">S. Abnar*, <span class="underline">H. Shah</span>*, D. Busbridge, A. El-Nouby, J. Susskind, V. Thilak*</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2025">ICML 2025</a></span><br>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://www.sparsellm.org/schedule">+ ICLR SLLM</a></span>, 2025</span>
      <img class="shields" src="https://img.shields.io/badge/-best_paper_award-navy?style=flat-square" alt=""><br>
    `,
    links: [{ label: "arxiv", href: "https://arxiv.org/abs/2501.12370" }],
    abstractHtml: `
      Scaling the capacity of language models has consistently proven to be a reliable approach for improving performance and unlocking new capabilities. Capacity can be primarily defined by two dimensions: the number of model parameters and the compute per example. While scaling typically involves increasing both, the precise interplay between these factors and their combined contribution to overall capacity remains not fully understood. We explore this relationship in the context of sparse Mixture-of-Expert models (MoEs), which allow scaling the number of parameters without proportionally increasing the FLOPs per example. We investigate how varying the sparsity level, i.e., the ratio of non-active to total parameters, affects model performance in terms of both pretraining and downstream performance. We find that under different constraints (e.g. parameter size and total training compute), there is an optimal level of sparsity that improves both training efficiency and model performance. These results provide a better understanding of the impact of sparsity in scaling laws for MoEs and complement existing works in this area, offering insights for designing more efficient architectures.
    `
  },
  {
    id: "contextcite",
    title: "ContextCite: Attributing Model Generation to Context",
    href: "https://arxiv.org/abs/2409.00729",
    infoDesktopHtml: `
      <span class="paper-authors">Benjamin Cohen-Wang*, <span class="underline">Harshay Shah</span>*, Kristian Georgiev*, Aleksander Madry</span><br/>
      <span class="paper-venue">Neural Information Processing Systems</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2024">NeurIPS</a>)</span>, 2024<br>
    `,
    infoMobileHtml: `
      <span class="paper-authors">B. Cohen-Wang*, <span class="underline">H. Shah</span>*, K. Georgiev*, A. Madry</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2024">NeurIPS 2024</a></span><br>
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2409.00729" },
      { label: "code", href: "https://github.com/MadryLab/context-cite" },
      { label: "blog post", href: "https://gradientscience.org/contextcite/" }
    ],
    abstractHtml: `
      How do language models actually use information provided as context when generating a response? Can we infer whether a particular generated statement is actually grounded in the context, a misinterpretation, or fabricated? To help answer these questions, we introduce the problem of context attribution: pinpointing the parts of the context (if any) that led a model to generate a particular statement. We then present ContextCite, a simple and scalable method for context attribution that can be applied on top of any existing language model. Finally, we showcase the utility of ContextCite through two case studies: (1) automatically verifying statements based on the attributed parts of the context and (2) improving response quality by extracting query-relevant information from the context.
    `
  },
  {
    id: "modelcomponents",
    title: "Decomposing and Editing Predictions by Modeling Model Computation",
    href: "https://arxiv.org/abs/2404.11534",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>, Andrew Ilyas, Aleksander Madry</span><br/>
      <span class="paper-venue">International Conference on Machine Learning</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2024">ICML</a>)</span>, 2024<br>
      <span class="paper-venue paper-venue-workshop">+ Workshop on Foundation Model Interventions</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/mint-2024">NeurIPS MINT</a>)</span>, 2024</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>, A. Ilyas, A. Madry</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2024">ICML 2024</a></span><br>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/mint-2024">+ NeurIPS MINT</a></span>, 2024</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2404.11534" },
      { label: "code", href: "https://github.com/MadryLab/modelcomponents" },
      { label: "blog post", href: "https://gradientscience.org/modelcomponents/" },
      { label: "blog post", href: "https://gradientscience.org/modelcomponents-editing/" }
    ],
    abstractHtml: `
      How does the internal computation of a machine learning model transform inputs into predictions? In this paper, we introduce a task called component modeling that aims to address this question. The goal of component modeling is to decompose an ML model's prediction in terms of its components -- simple functions (e.g., convolution filters, attention heads) that are the "building blocks" of model computation. We focus on a special case of this task, component attribution, where the goal is to estimate the counterfactual impact of individual components on a given prediction. We then present COAR, a scalable algorithm for estimating component attributions; we demonstrate its effectiveness across models, datasets, and modalities. Finally, we show that component attributions estimated with COAR directly enable model editing across five tasks, namely: fixing model errors, "forgetting" specific classes, boosting subpopulation robustness, localizing backdoor attacks, and improving robustness to typographic attacks. We provide code for COAR at <a target="_blank" rel="noopener noreferrer" href="https://github.com/MadryLab/modelcomponents">github.com/MadryLab/modelcomponents</a>
    `
  },
  {
    id: "modeldiff",
    title: "ModelDiff: A Framework for Comparing Learning Algorithms",
    href: "https://arxiv.org/abs/2211.12491",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>*, Sung Min Park*, Andrew Ilyas*, Aleksander Madry</span><br/>
      <span class="paper-venue">International Conference on Machine Learning</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2023">ICML</a>)</span>, 2023<br>
      <span class="paper-venue paper-venue-workshop">+ Workshop on Spurious Correlations, Invariance, and Stability</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/scis-workshop-23">ICML SCIS</a>)</span>, 2023</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>*, S. M. Park*, A. Ilyas*, A. Madry</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://icml.cc/Conferences/2023">ICML 2023</a></span><br>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/scis-workshop-23">+ ICML SCIS</a></span>, 2023</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2211.12491" },
      { label: "code", href: "https://github.com/MadryLab/modeldiff" },
      { label: "blog post", href: "https://gradientscience.org/modeldiff/" }
    ],
    abstractHtml: `
      We study the problem of (learning) algorithm comparison, where the goal is to find differences between models trained with two different learning algorithms. We begin by formalizing this goal as one of finding distinguishing feature transformations, i.e., input transformations that change the predictions of models trained with one learning algorithm but not the other. We then present ModelDiff, a method that leverages the datamodels framework (Ilyas et al., 2022) to compare learning algorithms based on how they use their training data. We demonstrate ModelDiff through three case studies, comparing models trained with/without data augmentation, with/without pre-training, and with different SGD hyperparameters. Our code is available at <a target="_blank" rel="noopener noreferrer" href="https://github.com/MadryLab/modeldiff">github.com/MadryLab/modeldiff</a>
    `
  },
  {
    id: "inputgrad",
    title: "Do Input Gradients Highlight Discriminative Features?",
    href: "https://arxiv.org/abs/2102.12781",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>, Prateek Jain, Praneeth Netrapalli</span><br/>
      <span class="paper-venue">Neural Information Processing Systems</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2020">NeurIPS</a>)</span>, 2021<br>
      <span class="paper-venue paper-venue-workshop">+ Workshop on Science and Engineering of Deep Learning</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/sedl-workshop/past-editions/2021?authuser=0">ICLR SEDL</a>)</span>, 2021</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
      <span class="paper-venue paper-venue-workshop">+ Workshop on Responsible AI</span>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/rai-workshop/">ICLR RAI</a>)</span>, 2021</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>, P. Jain, P. Netrapalli</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2021">NeurIPS 2021</a></span><br>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/sedl-workshop/past-editions/2021?authuser=0">+ ICLR SEDL</a></span>, 2021</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
      <span class="paper-venue-workshop"><span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/rai-workshop/">+ ICLR RAI</a></span>, 2021</span>
      <img class="shields" src="https://img.shields.io/badge/-oral-maroon?style=flat-square" alt=""><br>
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2102.12781" },
      { label: "code", href: "https://github.com/harshays/inputgradients" }
    ],
    abstractHtml: `
      Post-hoc gradient-based interpretability methods [Simonyan et al., 2013, Smilkov et al., 2017] that provide instance-specific explanations of model predictions are often based on assumption (A): magnitude of input gradients -- gradients of logits with respect to input -- noisily highlight discriminative task-relevant features. In this work, we test the validity of assumption (A) using a three-pronged approach. First, we develop an evaluation framework, DiffROAR, to test assumption (A) on four image classification benchmarks. Our results suggest that (i) input gradients of standard models (i.e., trained on original data) may grossly violate (A), whereas (ii) input gradients of adversarially robust models satisfy (A). Second, we introduce BlockMNIST, an MNIST-based semi-real dataset, that by design encodes a priori knowledge of discriminative features. Our analysis on BlockMNIST leverages this information to validate as well as characterize differences between input gradient attributions of standard and robust models. Finally, we theoretically prove that our empirical findings hold on a simplified version of the BlockMNIST dataset. Specifically, we prove that input gradients of standard one-hidden-layer MLPs trained on this dataset do not highlight instance-specific signal coordinates, thus grossly violating assumption (A). Our findings motivate the need to formalize and test common assumptions in interpretability in a falsifiable manner [Leavitt and Morcos, 2020]. We believe that the DiffROAR evaluation framework and BlockMNIST-based datasets can serve as sanity checks to audit instance-specific interpretability methods; code and data available at <a target="_blank" rel="noopener noreferrer" href="https://github.com/harshays/inputgradients">github.com/harshays/inputgradients</a>.
    `
  },
  {
    id: "si",
    title: "The Pitfalls of Simplicity Bias in Neural Networks",
    href: "https://arxiv.org/abs/2006.07710v2",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>, Kaustav Tamuly, Aditi Raghunathan, Prateek Jain, Praneeth Netrapalli</span><br/>
      <span class="paper-venue">Neural Information Processing Systems</span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2020">NeurIPS</a>)</span>, 2020<br>
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>, K. Tamuly, A. Raghunathan, P. Jain, P. Netrapalli</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://neurips.cc/Conferences/2020">NeurIPS 2020</a></span><br>
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2006.07710v2" },
      { label: "code", href: "https://github.com/harshays/simplicitybiaspitfalls" }
    ],
    abstractHtml: `
      Several works have proposed Simplicity Bias (SB)&mdash;the tendency of standard training procedures such as Stochastic Gradient Descent (SGD) to find simple models&mdash;to justify why neural networks generalize well [Arpit et al. 2017, Nakkiran et al. 2019, Soudry et al. 2018]. However, the precise notion of simplicity remains vague. Furthermore, previous settings that use SB to theoretically justify why neural networks generalize well do not simultaneously capture the non-robustness of neural networks&mdash;a widely observed phenomenon in practice [Goodfellow et al. 2014, Jo and Bengio 2017]. We attempt to reconcile SB and the superior standard generalization of neural networks with the non-robustness observed in practice by designing datasets that (a) incorporate a precise notion of simplicity, (b) comprise multiple predictive features with varying levels of simplicity, and (c) capture the non-robustness of neural networks trained on real data. Through theory and empirics on these datasets, we make four observations: (i) SB of SGD and variants can be extreme: neural networks can exclusively rely on the simplest feature and remain invariant to all predictive complex features. (ii) The extreme aspect of SB could explain why seemingly benign distribution shifts and small adversarial perturbations significantly degrade model performance. (iii) Contrary to conventional wisdom, SB can also hurt generalization on the same data distribution, as SB persists even when the simplest feature has less predictive power than the more complex features. (iv) Common approaches to improve generalization and robustness&mdash;ensembles and adversarial training&mdash;can fail in mitigating SB and its pitfalls. Given the role of SB in training neural networks, we hope that the proposed datasets and methods serve as an effective testbed to evaluate novel algorithmic approaches aimed at avoiding the pitfalls of SB; code and data available at <a target="_blank" rel="noopener noreferrer" href="https://github.com/harshays/simplicitybiaspitfalls/">github.com/harshays/simplicitybiaspitfalls</a>.
    `
  },
  {
    id: "arw",
    title: "Growing Attributed Networks through Local Processes",
    href: "https://arxiv.org/abs/1712.10195",
    infoDesktopHtml: `
      <span class="paper-authors"><span class="underline">Harshay Shah</span>, Suhansanu Kumar, Hari Sundaram</span><br/>
      <span class="paper-venue">World Wide Web Conference </span>
      <span class="paper-venue-abbrv">(<a target="_blank" rel="noopener noreferrer" href="https://www2019.thewebconf.org/">WWW</a>)</span>, 2019
    `,
    infoMobileHtml: `
      <span class="paper-authors"><span class="underline">H. Shah</span>, S. Kumar, H. Sundaram</span><br/>
      <span class="paper-venue-abbrv"><a target="_blank" rel="noopener noreferrer" href="https://www2019.thewebconf.org/">WWW</a></span>, 2019
    `,
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/1712.10195" },
      { label: "code", href: "https://github.com/CrowdDynamicsLab/ARW" },
      { label: "poster", href: "pdf/poster_www19_arw.pdf" },
      { label: "blog post", href: "https://crowddynamicslab.github.io/networks/2019/06/06/Growing-Attributed-Networks/" }
    ],
    abstractHtml: `
      This paper proposes an attributed network growth model. Despite the knowledge that individuals use limited resources to form connections to similar others, we lack an understanding of how local and resource-constrained mechanisms explain the emergence of rich structural properties found in real-world networks. We make three contributions. First, we propose a parsimonious and accurate model of attributed network growth that jointly explains the emergence of in-degree distributions, local clustering, clustering-degree relationship and attribute mixing patterns. Second, our model is based on biased random walks and uses local processes to form edges without recourse to global network information. Third, we account for multiple sociological phenomena: bounded rationality, structural constraints, triadic closure, attribute homophily, and preferential attachment. Our experiments indicate that the proposed Attributed Random Walk (ARW) model accurately preserves network structure and attribute mixing patterns of six real-world networks; it improves upon the performance of eight state-of-the-art models by a statistically significant margin of 2.5-10x.
    `
  }
];
