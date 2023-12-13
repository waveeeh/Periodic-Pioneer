import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hydrogen',
    loadChildren: () => import('./hydrogen/hydrogen.module').then( m => m.HydrogenPageModule)
  },
  {
    path: 'helium',
    loadChildren: () => import('./helium/helium.module').then( m => m.HeliumPageModule)
  },
  {
    path: 'lithium',
    loadChildren: () => import('./lithium/lithium.module').then( m => m.LithiumPageModule)
  },
  {
    path: 'beryllium',
    loadChildren: () => import('./beryllium/beryllium.module').then( m => m.BerylliumPageModule)
  },
  {
    path: 'boron',
    loadChildren: () => import('./boron/boron.module').then( m => m.BoronPageModule)
  },
  {
    path: 'carbon',
    loadChildren: () => import('./carbon/carbon.module').then( m => m.CarbonPageModule)
  },
  {
    path: 'nitrogen',
    loadChildren: () => import('./nitrogen/nitrogen.module').then( m => m.NitrogenPageModule)
  },
  {
    path: 'oxygen',
    loadChildren: () => import('./oxygen/oxygen.module').then( m => m.OxygenPageModule)
  },
  {
    path: 'fluorine',
    loadChildren: () => import('./fluorine/fluorine.module').then( m => m.FluorinePageModule)
  },
  {
    path: 'neon',
    loadChildren: () => import('./neon/neon.module').then( m => m.NeonPageModule)
  },
  {
    path: 'sodium',
    loadChildren: () => import('./sodium/sodium.module').then( m => m.SodiumPageModule)
  },
  {
    path: 'magnesium',
    loadChildren: () => import('./magnesium/magnesium.module').then( m => m.MagnesiumPageModule)
  },
  {
    path: 'aluminum',
    loadChildren: () => import('./aluminum/aluminum.module').then( m => m.AluminumPageModule)
  },
  {
    path: 'silicon',
    loadChildren: () => import('./silicon/silicon.module').then( m => m.SiliconPageModule)
  },
  {
    path: 'phosphorus',
    loadChildren: () => import('./phosphorus/phosphorus.module').then( m => m.PhosphorusPageModule)
  },
  {
    path: 'sulfur',
    loadChildren: () => import('./sulfur/sulfur.module').then( m => m.SulfurPageModule)
  },
  {
    path: 'chlorine',
    loadChildren: () => import('./chlorine/chlorine.module').then( m => m.ChlorinePageModule)
  },
  {
    path: 'argon',
    loadChildren: () => import('./argon/argon.module').then( m => m.ArgonPageModule)
  },
  {
    path: 'potassium',
    loadChildren: () => import('./potassium/potassium.module').then( m => m.PotassiumPageModule)
  },
  {
    path: 'calcium',
    loadChildren: () => import('./calcium/calcium.module').then( m => m.CalciumPageModule)
  },
  {
    path: 'scandium',
    loadChildren: () => import('./scandium/scandium.module').then( m => m.ScandiumPageModule)
  },
  {
    path: 'titanium',
    loadChildren: () => import('./titanium/titanium.module').then( m => m.TitaniumPageModule)
  },
  {
    path: 'vanadium',
    loadChildren: () => import('./vanadium/vanadium.module').then( m => m.VanadiumPageModule)
  },
  {
    path: 'chromium',
    loadChildren: () => import('./chromium/chromium.module').then( m => m.ChromiumPageModule)
  },
  {
    path: 'manganese',
    loadChildren: () => import('./manganese/manganese.module').then( m => m.ManganesePageModule)
  },
  {
    path: 'iron',
    loadChildren: () => import('./iron/iron.module').then( m => m.IronPageModule)
  },
  {
    path: 'cobalt',
    loadChildren: () => import('./cobalt/cobalt.module').then( m => m.CobaltPageModule)
  },
  {
    path: 'nickel',
    loadChildren: () => import('./nickel/nickel.module').then( m => m.NickelPageModule)
  },
  {
    path: 'copper',
    loadChildren: () => import('./copper/copper.module').then( m => m.CopperPageModule)
  },
  {
    path: 'zinc',
    loadChildren: () => import('./zinc/zinc.module').then( m => m.ZincPageModule)
  },
  {
    path: 'gallium',
    loadChildren: () => import('./gallium/gallium.module').then( m => m.GalliumPageModule)
  },
  {
    path: 'germanium',
    loadChildren: () => import('./germanium/germanium.module').then( m => m.GermaniumPageModule)
  },
  {
    path: 'arsenic',
    loadChildren: () => import('./arsenic/arsenic.module').then( m => m.ArsenicPageModule)
  },
  {
    path: 'selenium',
    loadChildren: () => import('./selenium/selenium.module').then( m => m.SeleniumPageModule)
  },
  {
    path: 'bromine',
    loadChildren: () => import('./bromine/bromine.module').then( m => m.BrominePageModule)
  },
  {
    path: 'krypton',
    loadChildren: () => import('./krypton/krypton.module').then( m => m.KryptonPageModule)
  },
  {
    path: 'rubidium',
    loadChildren: () => import('./rubidium/rubidium.module').then( m => m.RubidiumPageModule)
  },
  {
    path: 'strontium',
    loadChildren: () => import('./strontium/strontium.module').then( m => m.StrontiumPageModule)
  },
  {
    path: 'yttrium',
    loadChildren: () => import('./yttrium/yttrium.module').then( m => m.YttriumPageModule)
  },
  {
    path: 'zirconium',
    loadChildren: () => import('./zirconium/zirconium.module').then( m => m.ZirconiumPageModule)
  },
  {
    path: 'niobium',
    loadChildren: () => import('./niobium/niobium.module').then( m => m.NiobiumPageModule)
  },
  {
    path: 'molybdenum',
    loadChildren: () => import('./molybdenum/molybdenum.module').then( m => m.MolybdenumPageModule)
  },
  {
    path: 'technetium',
    loadChildren: () => import('./technetium/technetium.module').then( m => m.TechnetiumPageModule)
  },
  {
    path: 'ruthenium',
    loadChildren: () => import('./ruthenium/ruthenium.module').then( m => m.RutheniumPageModule)
  },
  {
    path: 'rhodium',
    loadChildren: () => import('./rhodium/rhodium.module').then( m => m.RhodiumPageModule)
  },
  {
    path: 'palladium',
    loadChildren: () => import('./palladium/palladium.module').then( m => m.PalladiumPageModule)
  },
  {
    path: 'silver',
    loadChildren: () => import('./silver/silver.module').then( m => m.SilverPageModule)
  },
  {
    path: 'cadmium',
    loadChildren: () => import('./cadmium/cadmium.module').then( m => m.CadmiumPageModule)
  },
  {
    path: 'indium',
    loadChildren: () => import('./indium/indium.module').then( m => m.IndiumPageModule)
  },
  {
    path: 'tin',
    loadChildren: () => import('./tin/tin.module').then( m => m.TinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
