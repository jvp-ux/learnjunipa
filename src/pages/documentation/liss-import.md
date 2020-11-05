---
templateKey: documentation-post
title: LISS timetable management
description: >-
  Junipa supports LISS timetable integration and integrates with timetabling and
  student management software - making it easy to synchronise timetables and
  class allocations.   
tags:
  - timetables
  - liss
---
## On this page

* [What is LISS](#what-is-liss)
* [Initial set up with Junipa and Edval](#initial-edval-setup)
* [Part 1: Sychronising Edval with Junipa](#synchronising-edval-with-junipa)
* [Part 2: Approving the Edval import within Junipa](#approving-the-edval-import)

<a id="what-is-liss"></a>  

## What is LISS

LISS = Lightweight Interoperability Standard for Schools.

LISS is an interoperability standard designed for K-12 schools, to connect Timetable applications and other applications to Student Information Systems / School Admin Systems. It is a web-based protocol based on JSON, (or XmlRpc, although XmlRpc is discouraged). The goal is that the combined system should act semantically as if it was a single system i.e. with changes propagated in near-real time, even if there are different look and feels in use.  More information can be found at <a href="https://liss.org.au/docs/about">https://liss.org.au/docs/about</a>

To see if your timetabling and student management system supports LISS view the supporting parties section on the LISS homepage: <a href="https://liss.org.au/">https://liss.org.au/</a>. 

## Prerequisites

>  Only Junipa users with sufficient privileges will have access to LISS settings within Junipa.   Make sure Junipa has a term set up with the correct Term dates. This is an important prerequisite prior to importing from LISS. 

<a id="initial-edval-setup"></a>  

## Initial set up with Junipa and Edval

![Identifying students by weeks of evidence recorded and disability categories](https://www.edval.education/wp-content/uploads/2017/12/Logo-Edval-PNG.png "Evidence overview adjustment level breakdown")

![edval configure](/img/configure-liss.gif "Configure LISS")

1. Navigate to File
2. Select Synchronise, 
3. Select Configure,
4. Add Junipa, and
5. Select Configure
6. Provide your LISS details

<a id="synchronising-edval-with-junipa"></a>  

## Part 1: Sychronising Edval with Junipa

>  The process of synchronisation is still an export and import process, so be sure to follow the instructions in the next step

![edval configure](/img/edval-sync-now.gif "Edval Sync now")

1. While viewing the Junipa Configure screen, 
2. Select Sync now, 
3. From the Sync now tab, ensure the Manual sync tab is selected, and
4. Select the items that you will be synchronising from Edval to Junipa. 

>  Attempt to only select those Edval items that have been updated since the last synchronisation. If you choose to sync all items then the process will take an extended period of time. 

5. Select Go.  

 Edval is now synchronising with Junipa. 

<a id="approving-the-edval-import"></a>  

## Part 2: Approving the Edval import within Junipa

> The synchronisation process is intentionally manual to ensure that the correct timetable information is being imported. 

![edval configure](/img/liss-import-junipa-end.gif "Liss import Junipa end")

1. Navigate to the LISS Imports screen, 
2. Select a synchronised item and  Sync now, 
3. From the Sync now tab, ensure the Manual sync tab is selected, and
4. Identify what items you are synchronising (importing) from Edval to Junipa and select Import Detail
5. Select what term you are importing into
6. Select Approve and Set
