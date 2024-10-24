import { Routes } from '@angular/router';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EmploiDuTempsComponent } from './emploi-du-temps/emploi-du-temps.component';
import { EnseignantCreateComponent } from './enseignant-create/enseignant-create.component';
import { ClasseComponent } from './classe/classe.component';
import { ClasseCreateComponent } from './classe-create/classe-create.component';
import { CoursComponent } from './cours/cours.component';
import { CoursCreateComponent } from './cours-create/cours-create.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereCreateComponent } from './matiere-create/matiere-create.component';
import { EmploiDuTempsCreateComponent } from './emploi-du-temps-create/emploi-du-temps-create.component';
import { AnneeComponent } from './annee/annee.component';
import { AnneeCreateComponent } from './annee-create/annee-create.component';

export const routes: Routes = [
    { path: 'dashboard', component: EmploiDuTempsComponent },
    { path: 'enseignants', component: EnseignantsComponent },
    { path: 'enseignant-create', component: EnseignantCreateComponent },
    { path: 'classes', component: ClasseComponent },
    { path: 'create-classe', component: ClasseCreateComponent },
    { path: 'subjects', component: MatiereComponent },
    { path: 'create-subject', component: MatiereCreateComponent },
    { path: 'courses', component: CoursComponent},
    { path: 'create-course', component: CoursCreateComponent},
    { path: 'annees', component: AnneeComponent },
    { path: 'create-annee', component: AnneeCreateComponent },
    { path: 'create-emploi-du-temps', component: EmploiDuTempsCreateComponent },

    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];
