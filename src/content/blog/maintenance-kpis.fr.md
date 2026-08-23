---
title: "MTBF, MTTR, disponibilité : ce que ces indicateurs disent vraiment"
description: "Trois indicateurs de maintenance, leur calcul, et surtout ce qu'ils cachent. Comment les lire sans se tromper de conclusion."
date: "2026-08-07"
slug: "mtbf-mttr-disponibilite"
topic: "Indicateurs"
category: "Définitions"
audience: "Direction"
author: "MainteNeat"
image: "/images/blog/maintenance-kpis.webp"
related: "features/kpi-dashboard"
---

Trois sigles reviennent dans toutes les discussions sur la performance de maintenance. Ils sont simples à calculer et faciles à mal interpréter.

## MTBF — temps moyen entre pannes

> MTBF = temps de fonctionnement / nombre de pannes

Une machine qui tourne 1 000 heures et tombe en panne 5 fois a un MTBF de 200 heures.

Le MTBF mesure la **fiabilité** : à quelle fréquence l'équipement vous lâche. Il monte quand les pannes s'espacent.

**Ce qu'il cache.** C'est une moyenne, donc elle écrase les extrêmes. Une machine avec quatre micro-arrêts sans conséquence et une casse majeure affiche le même MTBF qu'une machine avec cinq pannes moyennes. Ce ne sont pas les mêmes situations, et elles n'appellent pas la même réponse.

Le MTBF n'a aussi de sens que sur une période où la machine a réellement tourné. Un équipement à l'arrêt trois mois ne devient pas fiable.

## MTTR — temps moyen de réparation

> MTTR = temps total de réparation / nombre de réparations

Le MTTR mesure votre **réactivité**, pas la qualité de l'équipement. Il dépend de choses que vous contrôlez : la pièce était-elle en stock, le technicien était-il disponible, la documentation existait-elle.

**Ce qu'il cache.** Tout dépend de l'instant où vous démarrez le chronomètre. À la panne réelle ? À la déclaration ? À l'affectation du technicien ? Un MTTR calculé depuis l'affectation ignore les six heures pendant lesquelles personne n'a signalé l'arrêt — et c'est souvent là que se trouve le vrai problème.

C'est une raison de faire commencer le compteur à la déclaration, et de rendre la déclaration si simple qu'elle arrive tout de suite.

## Disponibilité

> Disponibilité = temps de fonctionnement / (temps de fonctionnement + temps d'arrêt)

C'est l'indicateur que la production comprend, parce qu'il répond à la seule question qui l'intéresse : la machine était-elle là quand j'en avais besoin ?

Il combine les deux précédents. Un MTBF élevé avec un MTTR élevé peut donner la même disponibilité qu'un MTBF faible avec des réparations rapides.

**Ce qu'il cache.** Un arrêt planifié et un arrêt subi ne pèsent pas pareil. Une révision annoncée trois semaines à l'avance, pendant laquelle la production s'est organisée, n'a pas le coût d'une casse un mardi matin. Séparer les deux dans l'historique n'est pas un détail comptable : sans cette distinction, le chiffre ne veut rien dire.

## L'erreur de fond

Ces trois indicateurs décrivent le passé. Ils ne disent pas ce qui va casser.

Ils servent à deux choses : repérer les machines qui consomment un temps disproportionné, et vérifier qu'une décision prise il y a six mois a produit l'effet attendu. Vous avez ajouté un plan préventif sur un compresseur ? Comparez son MTBF avant et après. C'est là que ces chiffres deviennent utiles.

## La condition préalable

Aucun de ces calculs ne vaut mieux que la saisie qui l'alimente. Si la moitié des interventions ne sont jamais enregistrées, votre MTBF est faux — et faux dans le sens flatteur, ce qui est le pire des cas.

C'est le principal argument pour que la déclaration soit sans friction. Une panne signalée en trente secondes depuis un QR code sur la machine entre dans le calcul ; la même panne qui exige un compte et six écrans n'y entre pas.

Dans MainteNeat, les rapports se construisent à partir des interventions déjà saisies : personne ne remplit un tableau d'indicateurs à côté du travail réel. C'est la seule façon d'obtenir des chiffres auxquels on peut se fier.
