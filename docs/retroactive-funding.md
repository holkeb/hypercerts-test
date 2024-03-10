---
title: Retroactive Funding
id: retroactive-funding
---

# Retroactive funding with hypercerts
Draft of current thinking, all comments welcome, Mar 8, 2024

## 0. Introduction
Retroactive funding, best exemplified by Optimism’s retroPGF, is like a continuous prize competition. One or multiple retroactive funders commit to fund projects after the projects’ work has been done and evaluated. The allocation of the funding is based on transparent evaluation and decision processes. Regular funding commitments encourage projects to anticipate future retroactive support, incentivizing them to align with funders’ objectives.

Hypercerts are an ideal tool to power retroactive funding.

Hypercerts are digital impact certificates that account for impactful work, recognizing both financial and non-financial contributors. In connection with an open evaluation system, they serve as the decentralized database for impact funding mechanisms. They transform siloed funding platforms into interconnected funding networks.

## 1. Retroactive funding with hypercerts
Let’s suppose a simple setup in which a retroactive funder rewards a project with retroactive funding. The project mints a hypercert that represents past work. The basic data fields of the hypercerts identify who did what when:
- Set of contributors
- Scope of work
- Time of work
- Rights

The fourth field describes what rights the owner of the hypercert has. In this setup, let the rights be “claim impact” of the associated work. Thus, when a funder purchases a fraction of a hypercert, they acquire the right to claim a portion of the project's impact, proportional to their ownership share.

Figure 1 shows a simple sequence for this setup. After the mint, the project sets the price (step 2), e.g. for every dollar a retroactive funder receives 1 newly minted unit of the hypercert. When the hypercert receives retroactive funding (3), it automatically mints the new fractions to the funder (4) and forwards the funding to the project (5).

Figure 1: Sequence of simple retroactive funding

Two important aspect to point out:
Dilution: In the example the units are newly minted, such that there is no limit to the retroactive funding the hypercert can receive. However, it also means that the fraction of owners is diluted if the project receives more retroactive funding. If a retroactive funder A owns 20% of the hypercert and a second retroactive funder B funds the project, the total fraction of funder A decreases.
Alternatively, the project could sell fractions that they own without any dilution to other owners, e.g. if funder B buys 10% that the project owns itself, funder A still has 20% of the total hypercert.
Bonding curve: In the example every unit has a constant price. Alternatively, the price per unit could increase the more units have been sold already. This would reward earlier funders twofold: They receive a lower price than later funders and the dilution of their shares by later funding is reduced.

## 2. Accounting for prospective funders and non-financial contributors
Hypercerts also account for prospective funding, such as traditional grants. In exchange for a grant, a project can allocate fractions of a hypercert to the grantmaker, giving them rights to claim a portion of the project's future impact. This ensures that retroactive funders are aware how previous funding affects the fractions they acquire, maintaining transparency in the process.

Beyond financial support, a project can transfer hypercert fractions to non-financial contributors to recognise them for their contribution. This would influence the fractions retroactive funders acquire in the same way prospective funding does.


Figure 2: Sequence of simple retroactive funding

Figure 2 shows how the project transfers hypercert fractions to a prospective funder, when the funding occurred even before the hypercert was minted. Alternatively, the project could mint the hypercert earlier and directly sell a fraction to the prospective funder.

## 3. The right to receive retroactive funding
So far contributors or funders have only received fractions with the right to claim the impact. In addition, prospective funders can also be rewarded financially when the project receives retroactive funding. We call this the “right to retroactive funding”.

With this right prospective funders can receive a financial return only up to their initial investment, avoiding profits to emphasize support over financial gain, rewarding commitment and risk without speculative returns.

When a project mints a hypercert, the project holds 100% of the fractions with the right to retroactive funding. The project then can sell fractions with this right to prospective funders and/or transfer them to non-financial contributors (step 3 and 4 in figure 3).

Figure 3: Sequence with the right to retroactive funding

The process for prospective funding with right to retroactive funding involves returning hypercert fractions to the funder once they receive retroactive funds (step 9 in figure 3). For instance, if a funder owns 10% of the hypercert fractions with rights to retroactive funding, they will receive 10% of any retroactive funding disbursed, until the total amount received matches what they initially paid for these fractions. Importantly, the total returns are limited to the funder's initial funding, ensuring that prospective funders do not realize a profit.

Instead of realizing a financial profit, the prospective funder keeps some fractions with impact claiming rights. The longer the prospective funder is financing the hypercert, the more of these fractions she keeps. This is her reward for lending the money and for taking the risk that the project would not receive retroactive funding.

Rather than earning a financial profit, prospective funders are compensated by retaining hypercert fractions with impact claiming rights. The longer their financial support, the bigger the fraction they retain. This serves as their reward for providing the funds and assuming the risk associated with the possibility that the project may not secure retroactive funding.

Both prospective and retroactive funders invest in projects aiming to generate positive impact, but their roles differ, enabling funders to specialize. Retroactive funders specialize in assessing completed projects' impact, investing without assuming direct project risks. In contrast, prospective funders identify and invest in promising projects early on, bearing the risks of project failure. Successful prospective funders recoup and reinvest their funds, while unsuccessful ones incur losses. This mechanism naturally favors the emergence of the most adept prospective funders over time.

## 4. Prize competition with hypercerts
A crucial aspect of a prize competition is that it starts with a commitment of the funder to fund projects retroactively as shown in figure 4 (step 1) (for simplicity of the illustration, the optional prospective funding is not shown). The hypercert is used as the submission to the prize competition (4) and receiver of the evaluations (6). The retroactive funding is transparently calculated based on the evaluations (7).


Figure 4: Sequence for prize competition

In this setup, several funders could participate in the prize competition, independently determining their funding allocations. Although they make their decisions independently, they can access and use the same evaluations and condition their contributions on the funding provided by other funders.

## 5. Pilots
We have run retroactive funding pilots with the events Zuzalu and ZuConnect. For ZuConnect the process was as follows:
Funders committed ETH to the retroactive fund
Contributors organized experiences at the ZuConnect
Contributors created hypercerts for each experience
Zuconnect core team attested hypercerts
Funders allocated their funds to hypercerts, which were forwarded to the contributors
Funders received fractions of the funded hypercerts; contributors kept a fraction as well

As a result, 45 funders have allocated a total of 16.5 ETH across 9 hypercerts. These funders and contributors are acknowledged on a 'hyperboard'—akin to digital billboards—displaying images that reflect their proportional ownership of the hypercerts. A preliminary version of the ZuConnect hyperboard is shown in figure 5.


Figure 5: ZuConnect hyperboard

## Concluding remarks
Hypercerts facilitate the accounting of funding across any mechanism or platform, enabling retroactive funders to base their contributions on a project's previously secured funding. They provide a foundation for funders to make credible and transparent claims about their specific share of a project's impact, essentially allowing them to quantify the extent of impact attributable to their funding.
