import ./macros/aoe_projectile.mcm
import ./macros/spawn_aoe_projectile.mcm
import ./macros/deal_damage.mcm
import ./macros/explode.mcm
import ./macros/fake_explode.mcm
import ./macros/kano_tools.mcm
import ./macros/kip_common.mcm
import ./macros/vms.mcm

#ASCII Fonts
#Electronic
#ANSI Regular
#Ogre
#Slant
#Small
#Avatar

# ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄  
#▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ 
#▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
#▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░▌ 
# ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀  
function load{

    #Starts scheduled functions
    schedule function kip:tick_1s 1s

    #Creates scoreboards and grants recipes
    kipper_load
}

# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌               ▐░▌       ▐░▌         ▐░▌  ▐░▌          
#▐░▌ ▄▄▄▄▄▄▄▄      ▐░▌        ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ 
#▐░▌▐░░░░░░░░▌     ▐░▌         ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌
#▐░▌ ▀▀▀▀▀▀█░▌     ▐░▌          ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌       ▐░▌     ▐░▌           ▐░▌ ▐░▌      ▐░▌          
#▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄        ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀ 
#This is where you'll make the spawn eggs for each mob. Generally make the spawn egg type the same as the model base (not the in-game base if different), but it'll always
#Summon a marker with nbt to be turned into the right mob up in the Spawn Egg section.
#The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
#kipper_egg [base_mob] [Name] ["boss" or mob's number spelled out]

dir give{

  function eggs{
 		 kipper_egg zombie Ricardo boss one
 		 kipper_egg creeper French boss two
 		 kipper_egg zombie Pancho ally one
 		 kipper_egg zombie Math ally two
 		 kipper_egg creeper <Rchard Son> ally three
 
  }

  function sword{
    give @s diamond_sword{AttributeModifiers:[{AttributeName:"generic.attack_damage",Name:"generic.attack_damage",Amount:-2147483647,Operation:0,UUID:[I;980754466,-885964612,-1405051231,1537106993],Slot:"mainhand"},{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:-2.1,Operation:0,UUID:[I;1348935930,-907001148,-1077164467,1443297864],Slot:"mainhand"}]}
  }
  function piglin_egg{
      give @s piglin_spawn_egg{EntityTag:{CustomName:"",HandItems:[{Count:1b,id:"crossbow"}],id:"piglin"},display:{Name:'{"italic":false,"color":"white","extra":[{"italic":false,"color":"yellow","text":"(Crossbow Only)"}],"text":"Piglin Spawn Egg "}'}}
  }
}

# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          
#▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌   ▄   ▐░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌ ▐░▌░▌ ▐░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
#          ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌
# ▄▄▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░▌░▌   ▐░▐░▌▐░▌     ▐░▐░▌ ▄▄▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░▌     ▐░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀         ▀  ▀▀       ▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
#This is where the functions for each mob's spawn from the Spawn Egg are made.
#Notable for being where you'll define the type of mob (for cases where it differs from the Egg type),
#as well as where you'll want to set its scale.

dir spawns{
  #    ___               
  #   / __ ___  ___ ___ 
  #  /__/// _ / __/ __|
  # / /   (_) __ __   # _____/___/|___/___/
  #Summon for boss mob
  #Note that the boss should always be vulnerable and is not affected by the mob_deaths_disable trigger
  #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
  #kipper_boss [base_mob] [Name] [Color of name] [Health as X.0 (no f)] [Additional NBT (optional)]

    function mob_boss_one { 
		kipper_boss zombie Ricardo #813232  1000.0 Silent:0b
 		#Make a linked bossbar for the boss. Adjust color and range as necessary
		lbb add @e[tag=kip.mob.boss,limit=1,sort=nearest] white progress boss 40
	}
 function mob_boss_two { 
		kipper_boss creeper French #fafafa  1000.0 Silent:0b
 		#Make a linked bossbar for the boss. Adjust color and range as necessary
		lbb add @e[tag=kip.mob.boss,limit=1,sort=nearest] white progress boss 40
	}
 

  #    _   _ _ _           
  #   /_ | | (_) ___  ___ 
  #  //_\| | | |/ _ / __|
  # /  _   | | |  __/__   # _/ _/_|_|_|___||___/
  #Each ally has its own Spawn function. Should not be renamed, as these are what get called by the spawn eggs!
  #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
  #kipper_ally [base_mob] [Name] [Color of name] [which mob number it is, spelled out] [Health as X.0 (no f)] [Additional NBT (optional)]

	function ally_one { 
		kipper_ally zombie Pancho #591fe0 one 50.0 Silent:0b
 	}
	function ally_two { 
		kipper_ally zombie Math #cea1a1 two 50.0 Silent:0b
 	}
	function ally_three { 
		kipper_ally creeper Rchard Son #f5e5e5 three 50.0 Silent:0b
 	}



#    ___          _                             
#   / _____  ___| |_ _   _ _ __ ___   ___  ___ 
#  / /  / _ / __| __| | | |  
# / /__| (_) __  |_| |_| | | | | | |  __/__ # ____/___/|___/__|__,_|_| |_| |_|___||___/

    #Each mob also gets a costume function. In theory the only thing you need to change is the mob type and the scale, if any.
    #These costumes don't need to care about vulnerability. They only exist as basically a temporary costume for the player.
    #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
    #kipper_costume [base_mob] [Name] [Color of name] [Additional NBT (optional)]

function costume_boss_one {
kipper_costume boss zombie Ricardo #813232 Silent:0b
 }
function costume_boss_two {
kipper_costume boss creeper French #fafafa Silent:0b
 }

function costume_one {
kipper_costume ally zombie Pancho #591fe0  Silent:0b
 }
function costume_two {
kipper_costume ally zombie Math #cea1a1  Silent:0b
 }
function costume_three {
kipper_costume ally creeper Rchard Son #f5e5e5  Silent:0b
 }




}
# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌
# ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ 
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌  
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌   
#     ▐░▌          ▐░▌     ▐░▌          ▐░░▌    
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌   
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌  
#     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌ 
#     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌
#      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀ 

function tick{

  #████████ ██  ██████ ██   ██     ██████  ██       █████  ██    ██ ███████ ██████  
  #   ██    ██ ██      ██  ██      ██   ██ ██      ██   ██  ██  ██  ██      ██   ██ 
  #   ██    ██ ██      █████       ██████  ██      ███████   ████   █████   ██████  
  #   ██    ██ ██      ██  ██      ██      ██      ██   ██    ██    ██      ██   ██ 
  #   ██    ██  ██████ ██   ██     ██      ███████ ██   ██    ██    ███████ ██   ██ 
  #Runs player tick functions
  execute as @a at @s run {
      name tick_player
      #Cooldown countdown
      scoreboard players add @s kip.tech.timer 0
      execute if score @s kip.tech.timer matches 1.. run scoreboard players remove @s kip.tech.timer 1

      #Checks for used warped fungus stick
      execute if entity @s[scores={kip.use_wstick=1..,kip.tech.timer=0}] run function kip:items/wstick_use
      scoreboard players set @s kip.use_wstick 0

      #Removes target tag when not in survival
      tag @s[gamemode=!survival] remove kip.target

     #
     #
     # triggers
     #
     #
     # 

      #New give trigger
      scoreboard players enable @s give_all_items
      execute if score @s give_all_items matches 1.. run {
          name give_all_items
          setblock ~ ~ ~ minecraft:shulker_box
          scoreboard players set @s give_all_items 0
      }

      #Mob control triggers macro
      kipper_mob_control_triggers
  }
  #████████ ██  ██████ ██   ██     ███████ ███    ██ ████████ ██ ████████ ██ ███████ ███████ 
  #   ██    ██ ██      ██  ██      ██      ████   ██    ██    ██    ██    ██ ██      ██      
  #   ██    ██ ██      █████       █████   ██ ██  ██    ██    ██    ██    ██ █████   ███████ 
  #   ██    ██ ██      ██  ██      ██      ██  ██ ██    ██    ██    ██    ██ ██           ██ 
  #   ██    ██  ██████ ██   ██     ███████ ██   ████    ██    ██    ██    ██ ███████ ███████ 
  #Runs entity-specific functions
  execute as @e[type=!player] at @s run {
    name tick_entities
  #
  # SPAWN EGGS
  #
  #
  #
  #Spawn Egg summons
  #This is where the Markers that come out of the Spawn Egg items (Give section) become the appropriate mob.
  #This way, you can define a summon animation or otherwise just scale them up appropriately in their Spawn function
       
       
    execute if entity @s[tag=kip.summon] run {
    name spawn_eggs_shared
    	execute if entity @s[tag=kip.summon.boss_one] run function kip:spawns/mob_boss_one 
	execute if entity @s[tag=kip.summon.boss_two] run function kip:spawns/mob_boss_two 
	execute if entity @s[tag=kip.summon.one] run function kip:spawns/ally_one 
	execute if entity @s[tag=kip.summon.two] run function kip:spawns/ally_two 
	execute if entity @s[tag=kip.summon.three] run function kip:spawns/ally_three 

          kill @s
    }

    #costume behavior macro. Do not remove!
    kipper_costume_behavior

    #
    # CUSTOM MOBS
    #
    #
    #
    #Custom Mobs Behavior
    #This is where the behavior for all of the remodeled mobs is covered and broken down by subsection.
 
    execute if entity @s[tag=kip.mob] run { // REF #1 START
      name mob_shared_behavior

      #Macro for mob control trigger settings. Do not remove!
      kipper_mob_trigger_settings

      #
      #
      # TARGET SETTINGS
      #
      #
      #Determines how mobs seek out their targets. Right now all ally mobs share the same target-seeking parameters, 
      #but you can break it up for specific mobs if you want. The ally_line_of_sight function checks
      #that they aren't targeting something they can't see. Note that this isn't perfect, as if one mob targets a mob,
      #it'll be considered a valid target for all of them.
      #Generally, you probably don't need to change this section.
      #If mobs_attack enabled, searches for target

      execute if entity @s[tag=kip.can_attack] run { // #REF 2
        name mob_target_seek

        #Boss
 		execute if entity @s[tag=kip.mob.boss_one] anchored eyes run {
                  name boss_seek
                  execute as @e[tag=kip.mob.ally,distance=..20] run {
                      name boss_line_of_sight
                      LOOP(20,i){
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @s[type=#kip:mobs,tag=!kip.mob.boss,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @e[type=player,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> unless block ~ ~ ~ #kip:nonsolid run tag @s add kip.blocked
                      }
                      tag @s remove kip.blocked
                  }
              } 
		execute if entity @s[tag=kip.mob.boss_two] anchored eyes run {
                  name boss_seek
                  execute as @e[tag=kip.mob.ally,distance=..20] run {
                      name boss_line_of_sight
                      LOOP(20,i){
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @s[type=#kip:mobs,tag=!kip.mob.boss,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @e[type=player,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> unless block ~ ~ ~ #kip:nonsolid run tag @s add kip.blocked
                      }
                      tag @s remove kip.blocked
                  }
              } 

       
       
        execute if entity @s[tag=kip.mob] anchored eyes run {
          name one_seek
          execute as @e[type=#kip:mobs,tag=!kip.mob.ally,distance=..20] run {
              LOOP(20,i){
                  execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @s[type=#kip:hostile_mobs,tag=!kip.mob.ally,distance=..3] add kip.target 
                  execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @s[tag=kip.mob.boss,distance=..3] add kip.target 
                  execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> unless block ~ ~ ~ #kip:nonsolid run tag @s add kip.blocked
              }
              tag @s remove kip.blocked
          }
        }
      } 

      #
      #
      # ESPECIAL ATTACK
      #
      #
      #This section is for all of the mobs' special attacks. Most will only have one, or two, with any further abilities being passive, if any.
      #Remember that mobs with renaged attacks should keep a good distance from their target so the projectiles can be seen. Use the move_towards_entity
      #to aid in follow behavior. You can define a distance in the target selector for the macro to make a mob only move towards it until it gets to a certain range.


      #
      #
      # BOSS
      #
      #Boss mob special attacks work a bit differently than ally mobs, since it has 4 that need to be able to be manually triggered.
      #If the next attack hasn't already been selected with the boss_attack trigger, then it'll randomly select an attack. Note that you may need to apply some
      #extra logic in the event the randomly chosen attack can't be used for whatever reason, such as if it's a melee attack but there's no target in range.
      #Boss mob. If mobs_attack enabled, performs special attacks against target(s)
      execute if entity @s[tag=kip.mob.boss] run { //ref3
        name boss_behavior

        #Boss attack control
        execute if entity @s[tag=kip.can_attack] if entity @e[tag=kip.target,tag=!kip.mob.boss] run {
            name boss_hostile_behavior
            scoreboard players add @s kip.attack.timer 0
            scoreboard players add @s kip.attack.timer 1

      
      # BOSS one      
      # Ricardo      
      execute if entity @s[tag=kip.mob.boss_one] run {
        name boss_one_behavior
        #Select attack
          execute if score @s kip.attack.timer matches 100.. run {
          name boss_one_select_attack

          #Selects an attack at random unless an attack was manually selected
          scoreboard players add @s kip.random 0
          execute if score @s kip.random matches 0 run random store score @s kip.random 1 4

          #Boss attack 1. May need additional conditions for ranged, etc.
          execute if score @s kip.random matches 1 run {
              name boss_one_attack_1
              say Boss 1
          }

          #Boss attack 2
          execute if score @s kip.random matches 2 run {
              name boss_one_attack_2
              say Boss 2
          }

          #Boss attack 3
          execute if score @s kip.random matches 3 run {
              name boss_one_attack_3
              say Boss 3
          }

          #Boss attack 4
          execute if score @s kip.random matches 4 run {
              name boss_one_attack_4
              say Boss 4
          }
                              
          scoreboard players reset @s kip.random
          scoreboard players reset @s kip.attack.timer
        }
      # BOSS two      
      # French      
      execute if entity @s[tag=kip.mob.boss_two] run {
        name boss_two_behavior
        #Select attack
          execute if score @s kip.attack.timer matches 100.. run {
          name boss_two_select_attack

          #Selects an attack at random unless an attack was manually selected
          scoreboard players add @s kip.random 0
          execute if score @s kip.random matches 0 run random store score @s kip.random 1 4

          #Boss attack 1. May need additional conditions for ranged, etc.
          execute if score @s kip.random matches 1 run {
              name boss_two_attack_1
              say Boss 1
          }

          #Boss attack 2
          execute if score @s kip.random matches 2 run {
              name boss_two_attack_2
              say Boss 2
          }

          #Boss attack 3
          execute if score @s kip.random matches 3 run {
              name boss_two_attack_3
              say Boss 3
          }

          #Boss attack 4
          execute if score @s kip.random matches 4 run {
              name boss_two_attack_4
              say Boss 4
          }
                              
          scoreboard players reset @s kip.random
          scoreboard players reset @s kip.attack.timer
        }      
        S}
      }     
      
      #
      #
      #ALLIES
      #You'll need to make a new section for each remodeled ally mob here.
      #You can define a different follow range and speed, as well as an attack(s) based on target range.
      #Ally mobs only. If mobs_attack enabled, performs special attacks against target(s)
      
      execute if entity @s[tag=kip.can_attack,tag=kip.mob.ally] if entity @e[tag=kip.target,tag=!kip.mob.ally] run {
        name mob_ally_shared_hostility
        scoreboard players add @s kip.attack.timer 0
        scoreboard players add @s kip.attack.timer 1
        sb @s kip.time_since_close_atk ++
        sb @s kip.time_since_ranged_atk ++
    }
    
    #
    # one
    #
    #
    #Pancho 
    execute if entity @s[tag=kip.mob.one] run {
    name one_behavior

	#This is a simple and easy/common macro you can use to make a mob move towards a target and face it.
	#For demonstation, only if on the ground. The number at the end is the scaling factor for the follow speed.
	#1 is instanenous, and larger numbers are slightly slower. Between 12-20 tends to be a good range.
	execute unless predicate kip:in_air run move_towards_entity @e[tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=2..16] 12
	#Here is another option for you to use for more dynamic mob movement, courtesy of Travis. You can include this in any mob's tick function 
	#that you want to have follow targets, close in when using a melee or backup when using a ranged, strafe, etc. You can apply the tag "kip.ignore_vms" 
	#to have the mob temporarily not use that dyanmic movement, such as if you're making it dig underground or jump.
	#NOTE: If you want the mob to use the flight distance, you need to also tag them with kip.flight_mob
	#Syntax:
	#vms <tag filter> <flight distance from ground, use 0 if not a flight mob> <max distance> <min distance> <forward speed> <back speed> <left speed> <right speed> <occasional forwards duration> <occasional backwards duration> <close attack ensurance time, set to -1 to not use> <ranged attack ensurance time, set to -1 to not use>
	# vms tag=!kip.mob.one,tag=kip.target 2 12 3 0.08 0.08 0.06 0.06 1s 16t -1 -1

    #Attacks
    execute if score @s kip.attack.timer matches 100.. run {
        name one_hostile_behavior

        #Close attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=..4] run {
            name one_attack_close
            reset_close_timer
            say Close Attack
            }

        #Ranged attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=5..] run {
            name one_attack_far
            reset_ranged_timer
            say Ranged Attack
            }

        scoreboard players reset @s kip.attack.timer
        }
    }
    #
    # two
    #
    #
    #Math 
    execute if entity @s[tag=kip.mob.two] run {
    name two_behavior

 HOLA

    #Attacks
    execute if score @s kip.attack.timer matches 100.. run {
        name two_hostile_behavior

        #Close attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=..4] run {
            name two_attack_close
            reset_close_timer
            say Close Attack
            }

        #Ranged attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=5..] run {
            name two_attack_far
            reset_ranged_timer
            say Ranged Attack
            }

        scoreboard players reset @s kip.attack.timer
        }
    }
    #
    # three
    #
    #
    #Rchard Son 
    execute if entity @s[tag=kip.mob.three] run {
    name three_behavior

 HOLA

    #Attacks
    execute if score @s kip.attack.timer matches 100.. run {
        name three_hostile_behavior

        #Close attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=..4] run {
            name three_attack_close
            reset_close_timer
            say Close Attack
            }

        #Ranged attack
        execute if entity @e[type=!#kip:ignore_player,tag=kip.target,tag=!kip.mob.ally,limit=1,sort=nearest,distance=5..] run {
            name three_attack_far
            reset_ranged_timer
            say Ranged Attack
            }

        scoreboard players reset @s kip.attack.timer
        }
    }    

   }  

  } 
 
# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄          ▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌       ▄█░░░░▌    ▐░░░░░░░░░░░▌
# ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌       ▐░░▌▐░░▌    ▐░█▀▀▀▀▀▀▀▀▀ 
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌         ▀▀ ▐░░▌    ▐░▌          
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌             ▐░░▌    ▐░█▄▄▄▄▄▄▄▄▄ 
#     ▐░▌          ▐░▌     ▐░▌          ▐░░▌              ▐░░▌    ▐░░░░░░░░░░░▌
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌             ▐░░▌     ▀▀▀▀▀▀▀▀▀█░▌
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌            ▐░░▌              ▐░▌
#     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌       ▄▄▄▄█░░█▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌
#     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
#      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
function tick_1s{
  execute as @a at @s run {
      name tick_1s_player

      #Puts the player on the right team and considers them an ally, so the remodeled mobs don't attack them in survival.
      tag @s add kip.mob.ally
      team join kip.mobs
  }

  execute as @e[type=!player] at @s run {
      name tick_1s_entities

      #This is just here to make this a function at compile time.
      execute if entity @s
      execute if entity @s
  }

  #Reschedule function
  schedule function kip:tick_1s 1s
}

# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌
# ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀ s
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌ ▐░▌▐░▌▐░▌          
#     ▐░▌          ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
#     ▐░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌
#     ▐░▌          ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▀   ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌       ▐░▌          ▐░▌
# ▄▄▄▄█░█▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ 
dir items{
  function wstick_use{
      #Not likely we'll have much need for Warped Fungus on a Stick,
      #but this is where you can check what Warped Fungus on a Stick item was used and apply the right function if needed
  }
  function damaged_mob{
      #This is an advancement for when the player damages (or kills) a mob. It will mark that damaged mob as a target (if any) for the remodeled mobs.
      #Useful for instances where they are having trouble seeking a clear target.
      advancement revoke @s only kip:damaged_mob
      advancement revoke @s only kip:killed_mob
      tag @e[type=#kip:mobs,tag=!kip.mob,limit=1,sort=nearest,predicate=!kip:not_hurt] add kip.target
      execute if predicate kip:items/debug_stick run kill @e[tag=kip.mob,limit=1,sort=nearest,predicate=!kip:not_hurt]
  }
}

function force_ready {
  scoreboard players set @e[tag=kip.mob] kip.tech.timer 290
  trigger mobs_attack
}
        
